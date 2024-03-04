import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const  Nav = () => {
  const url = `${process.env.AuthUrl}/?client_id=${process.env.ClientId}&scope=${process.env.SCOPE}&redirect_uri=${process.env.RedirectUri}`;
  return (
    <div className='fixed top-0	w-[100vw] h-[80px] bg-[#EBE4D1] flex justify-between items-center px-5 shadow shadow-neutral-500 z-10'>
      <Link href='/'><h1 className='text-3xl lg:text-4xl font-serif'>部落格</h1></Link>
      <BottomNavigation className='bg-transparent'>
        <BottomNavigationAction 
          icon=
            {<Link href='/'>
              <div className='flex gap-1 lg:gap-2 items-center'>
                <GridViewIcon /><span className='text-base lg:text-lg'>列表</span>
              </div>
            </Link>} 
        />
        <BottomNavigationAction 
          icon=
            {<Link href={url}>
                <div className='flex gap-1 lg:gap-2 items-center'>
                  <PersonIcon /><span className='text-base lg:text-lg'>登入</span>
                </div>
              </Link>}
        />
      </BottomNavigation>
    </div>
  );
}
export default Nav;