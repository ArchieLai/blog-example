'use client'
import { createContext, useState, useEffect } from 'react';
import { getData } from '@/service/fetch';
import { DataType, DataContextType } from '@/types/data';

export const DataContext = createContext<DataContextType>({  //default values
  data: [],
  page: 1,
  setPage: ()=>{},
})

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [data, setData] = useState<DataType[]>([]); 
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(page, pageSize) 
      const dataSet = new Set(data);
      result.forEach((item: DataType)=> dataSet.add(item))
      setData([...dataSet]);
    }
    fetchData()
  }, [page])

  return (
    <DataContext.Provider value={{data, page, setPage}}>
      {children} 
    </DataContext.Provider>
  )
} 