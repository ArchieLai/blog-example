'use client';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { EditProps } from '@/types/component';

const Edit = (props: EditProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen}>編輯</button>
        <Backdrop
          // sx={{ zIndex: 6}}
          open={open}
        >
          <div className='bg-white w-[800px]'>
            <button onClick={handleClose}>關閉</button>
            <form action="/submit" method="post" className='bg-white flex flex-col'>
              <label>Input title</label>
              <input type='text' name='title' placeholder={props.title} required />
              <label>Input content</label>
              <textarea name='body' placeholder={props.body} className='h-[300px]' />
              <button type="submit" onClick={handleClose}>更新</button>
            </form>
          </div>
        </Backdrop>
    </div>
  );
}
export default Edit;