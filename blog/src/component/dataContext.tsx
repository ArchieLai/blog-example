'use client'
import { createContext, useState, useEffect } from 'react';
import { getData } from '@/service/getData';
import { DataType, DataContextType } from '@/types/data';

export const DataContext = createContext<DataContextType>({  //default values
  data: [],
  setData: ()=>{},
  page: 1,
  setPage: ()=>{},
  code: "",
  setCode: ()=>{}
})

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [data, setData] = useState<DataType[]>([]); 
  const [page, setPage] = useState(1);
  const [code, setCode] = useState("");
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
    <DataContext.Provider value={{data, setData, page, setPage, code, setCode}}>
      {children} 
    </DataContext.Provider>
  )
} 