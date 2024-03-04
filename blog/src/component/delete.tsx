'use client';
import { useState, useContext } from 'react';
import deleteIssue from '@/service/deleteIssue';
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";

const Delete = (props: {id: string}) => {
  const {code, setData, data} = useContext<DataContextType>(DataContext);
  const handleClick = async () => {
    const res = await deleteIssue(code, props.id);
    if (res) {
      const prevData = data.filter((record) => { return record.id !== Number(res.number)});      
      setData(prevData);
      return;
    }
  }

  return (
    <button onClick={handleClick} className='w-[60px] lg:w-[100px] h-[30px] lg:h-[50px] bg-neutral-600 text-white rounded-md text-sm lg:text-lg mt-10'>刪除</button>
  );
}
export default Delete;