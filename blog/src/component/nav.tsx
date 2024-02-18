'use client';
import React, { MouseEvent } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';

const  Nav = () => {
  const router = useRouter();
  const handleClick = (e: MouseEvent, route: string) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <div className='fixed top-0	w-[100vw] h-[80px] bg-[#494953] text-white flex justify-between items-center px-5 shadow shadow-black z-10'>
      <span className='text-5xl font-serif font-light'>部落格</span>
      <BottomNavigation className='bg-transparent'>
        <BottomNavigationAction 
          icon=
            {<div className='flex gap-2'>
              <GridViewIcon /><span>列表</span>
            </div>} 
          onClick={(e: MouseEvent) => handleClick(e, "/")} 
        />
        <BottomNavigationAction 
          icon=
            {<div className='flex gap-2'>
              <PersonIcon /><span>登入</span>
            </div>} 
          onClick={(e: MouseEvent) => handleClick(e, "/")}
        />
      </BottomNavigation>
    </div>
  );
}
export default Nav;