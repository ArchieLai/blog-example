'use client';
import { useState, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { EditProps } from '@/types/component';
import updateIssue from '@/service/updateIssue';
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";

const Edit = (props: EditProps) => {
  const {code, setData, data} = useContext<DataContextType>(DataContext);
  const [formData, setFormData] = useState({
    title: props?.title,
    body: props?.body,
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await updateIssue(code, formData, props.id);

    //update context
    if (res.number !== undefined) {
      const prevData = data.filter((record) => { return record.id !== Number(res.number)});
      setData([...prevData, {id: res.number, title: res.title, body: res.body, created_at: res.created_at}]);
    }
  }

  return (
    <div>
      <button onClick={handleOpen}>編輯</button>
        <Backdrop
          open={open}
        >
          <div className='bg-white w-[800px]'>
            <button onClick={handleClose}>關閉</button>
            <form onSubmit={handleSubmit} method="post" className='bg-white flex flex-col'>
              <label>Input title</label>
              <input 
                type='text' 
                name='title'
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <label>Input content</label>
              <textarea 
                name='body' 
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                className='h-[300px]' 
              />
              <button type="submit" onClick={handleClose}>更新</button>
            </form>
          </div>
        </Backdrop>
    </div>
  );
}
export default Edit;