'use client'
import Card from "@/component/card";
import { useContext, useEffect, useState } from "react";
import { DataContext } from '../component/dataContext';
import { DataContextType } from "@/types/data";
import Create from "@/component/create";

const Home = () => {
  const {data, page, setPage, code, setCode}: DataContextType = useContext(DataContext);

  useEffect(() => {
    const url = new URL(window.location.href);
    const myCode = url.searchParams.get('code');
    if (myCode !== null) {
      setCode(myCode);
    }
  }, [code]);

  return (
    <main className="flex flex-col items-center gap-[20px] mt-10">
      {code && <Create code={code} />}
      {data.map((item) => {
        return(
          <Card key={item?.id.toString()} title={item?.title} index={item?.id} created_at={item?.created_at.split('T')[0]} />
        );
      })}
    </main>
  );
}
export default Home;

// TODO: infinite scroll