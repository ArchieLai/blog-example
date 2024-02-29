'use client'
import Card from "@/component/card";
import { use, useContext, useEffect, useState } from "react";
import { DataContext } from '../component/dataContext';
import { DataContextType } from "@/types/data";
import Create from "@/component/create";

const Home = () => {
  const {data, page, setPage, code, setCode}: DataContextType = useContext(DataContext);
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    const url = new URL(window.location.href);
    const myCode = url.searchParams.get('code');
    if (myCode !== null) {
      setCode(myCode);
    }
  }, [code]);
  useEffect(() => {
    setSortedData(data.slice().sort((a, b) => Number(b.id )- Number(a.id)));
  }, [data]);

  return (
    <main className="flex flex-col items-center gap-[20px] mt-10">
      {code && <Create />}
      {sortedData.map((item) => {
        if (item.id != undefined){
          return(
            <Card key={item?.id.toString()} title={item?.title} index={item?.id} created_at={item?.created_at.split('T')[0]} />
          );
          }
      })}
    </main>
  );
}
export default Home;

// TODO: infinite scroll