'use client';
import { createContext, useState, useEffect } from 'react';
import { getData } from '@/service/getData';
import { DataType, DataContextType } from '@/types/data';

export const DataContext = createContext<DataContextType>({  //default values
  data: [],
  setData: ()=>{},
  page: 1,
  setPage: ()=>{},
  code: "",
  setCode: ()=>{},
  isLast: false,
  setIsLast: ()=>{},
})

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [data, setData] = useState<DataType[]>([]); 
  const [page, setPage] = useState(1);
  const [code, setCode] = useState("");
  const [isLast, setIsLast] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(page, pageSize);
      if (result.length > 0) {
        console.log('fetching page', page);
        setData((prevData) => {
          return [...prevData, ...result];
        });
      }
      else {
        setIsLast(true);
      }
    }
    fetchData();
  }, [page]);

  return (
    <DataContext.Provider value={{data, setData, page, setPage, code, setCode, isLast, setIsLast}}>
      {children} 
    </DataContext.Provider>
  )
} 