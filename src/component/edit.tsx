'use client';
import { useState, useContext, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { EditProps } from '@/types/component';
import updateIssue from '@/service/updateIssue';
import createIssue from '@/service/createIssue';
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";
import CloseIcon from '@mui/icons-material/Close';

const Edit = (props: EditProps) => {
  const {code, setData, data} = useContext<DataContextType>(DataContext);
  const [formData, setFormData] = useState({
    title: props?.title,
    body: props?.body,
  });
  const [valBody, setValBody] = useState(false);
  const [valTitle, setValTitle] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valBody && !valTitle) {
      const formData = new FormData(e.currentTarget);
      const res = await updateIssue(code, formData, props.id);
      //update context
      if (res.number !== undefined) {
        const prevData = data.filter((record) => { return record.id !== Number(res.number)});
        setData([...prevData, {id: res.number, title: res.title, body: res.body, created_at: res.created_at}]);
      }
    }
  }

  const handleCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valBody && !valTitle) {
      const newFormData = new FormData(e.currentTarget);
      const res = await createIssue(code, newFormData);
      //update context
      if (res.number !== undefined) {
        const newData = {id: res.number, title: res.title, body: res.body, created_at: res.created_at};
        setData(prevData => {return[...prevData, newData]});
      }
      setFormData({ title: '', body: '' }); //clear form
    }
  }
  
  // validation
  useEffect(() => {
    const validation = () => {
      if (formData.body.length < 30) {
        setValBody(true);
      } else {
        setValBody(false);
      }
      if (formData.title.length === 0) {
        setValTitle(true);
      } else { 
        setValTitle(false);
      }
    }
    validation();
  }, [formData.body, formData.title]);

  return (
    <div>
      <button onClick={handleOpen} className='w-[60px] lg:w-[100px] h-[30px] lg:h-[50px] bg-neutral-600 text-white rounded-md text-sm lg:text-lg'>
        {props.isCreate ? "新增" : "編輯"}
      </button>
      <Backdrop open={open}>
        <div className='bg-white w-[90vw] lg:w-[1000px] p-5 rounded-lg'>
          <div className='text-right'><button onClick={handleClose}><CloseIcon /></button></div>
          <form onSubmit={props.isCreate ? handleCreateSubmit : handleEditSubmit} method="post" className='bg-white flex flex-col gap-2'>
            <label className='text-md lg:text-xl'>{props.isCreate ? "新增標題" : "編輯標題"}</label>
            <input 
              type='text' 
              name='title'
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className='border-2 border-neutral-400 rounded-sm p-2'
            />
            {valTitle && <p className='text-red-500 text-center'>標題不得為空</p>}
            <label className='text-md lg:text-xl'>{props.isCreate ? "新增內容" : "編輯內容"}</label>
            <textarea 
              name='body' 
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              className='h-[200px] border-2 border-neutral-400 rounded-sm p-2' 
            />
            {valBody && <p className='text-red-500 text-center'>內容不得少於30字</p>}
            <div className='text-center'>
              <button type="submit" onClick={handleClose} className='w-[60px] lg:w-[100px] h-[30px] lg:h-[50px] bg-neutral-600 text-white rounded-md text-sm lg:text-lg'>
                {props.isCreate ? "新增" : "更新"}
              </button>
            </div>              
          </form>
        </div>
      </Backdrop>
    </div>
  );
}
export default Edit;