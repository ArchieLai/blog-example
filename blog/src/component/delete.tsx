'use client';
import { useState, useContext } from 'react';
import deleteIssue from '@/service/deleteIssue';
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';

const Delete = (props: {id: string}) => {
  const {code, setData, data} = useContext<DataContextType>(DataContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClick = async () => {
    const res = await deleteIssue(code, props.id);
    if (res) {
      const prevData = data.filter((record) => { return record.id !== Number(res.number)});      
      setData(prevData);
      return;
    }
  }

  return (
    <div>
      <button onClick={handleOpen} className='w-[60px] lg:w-[100px] h-[30px] lg:h-[50px] bg-neutral-600 text-white rounded-md text-sm lg:text-lg mt-5'>刪除</button>
      <Backdrop open={open}>
        <div className='bg-white w-[70vw] lg:w-[500px] p-5 rounded-lg'>
          <div className='text-right'><button onClick={handleClose}><CloseIcon /></button></div>
          <div className='text-md lg:text-xl'><h1>確認是否刪除？</h1></div>
          <div className='text-center'>
            <button onClick={handleClick} className='w-[60px] lg:w-[100px] h-[30px] lg:h-[50px] bg-neutral-600 text-white rounded-md text-sm lg:text-lg mt-5'>確認</button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}
export default Delete;