'use client';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import createIssue from '@/service/createIssue';

const Create = ({code}: {code: string}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const createIssueWithCode = createIssue.bind(null, code); //Passing Additional Arguments
  return (
    <div>
      <button onClick={handleOpen}>新增</button>
        <Backdrop
          // sx={{ zIndex: 6}}
          open={open}
        >
          <div className='bg-white w-[800px]'>
            <button onClick={handleClose}>關閉</button>
            <form action={createIssueWithCode} method="post" className='bg-white flex flex-col'>
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