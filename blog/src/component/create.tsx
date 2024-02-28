'use client';
import { useState, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import createIssue from '@/service/createIssue';
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";

const Create = ({code}: {code: string}) => {
  const {setData} = useContext<DataContextType>(DataContext);
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
    const res = await createIssue(code, formData);

    //update context
    if (res) {
      const newData = {id: res.number, title: res.title, body: res.body, created_at: res.created_at};
      setData(prevData => {
        const updated = [...prevData, newData];
        return updated.sort((a, b) => b.id - a.id);
      });
    }
  }
  
  return (
    <div>
      <button onClick={handleOpen}>新增</button>
        <Backdrop
          open={open}
        >
          <div className='bg-white w-[800px]'>
            <button onClick={handleClose}>關閉</button>
            <form onSubmit={handleSubmit} method="post" className='bg-white flex flex-col'>
              <label>Input title</label>
              <input type='text' name='title' required />
              <label>Input content</label>
              <textarea name='body' className='h-[300px]' />
              <button type="submit" onClick={handleClose}>新增</button>
            </form>
          </div>
        </Backdrop>
    </div>
  );
}
export default Create;