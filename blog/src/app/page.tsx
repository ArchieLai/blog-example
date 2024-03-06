'use client';
import Card from "@/component/card";
import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from '../component/dataContext';
import { DataContextType } from "@/types/data";
import Edit from "@/component/edit";

const Home = () => {
  const {data, setPage, code, setCode, isLast}: DataContextType = useContext(DataContext);
  const [sortedData, setSortedData] = useState(data);
  const reference = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const myCode = url.searchParams.get('code');
    if (myCode !== null) {
      setCode(myCode);
    }
  }, [code]);

  useEffect(() => {
    setSortedData(data.slice().sort((a, b) => Number(b.id)- Number(a.id)));
  }, [data]);

  // infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLast) {
        setPage((prevPage) => prevPage + 1);
      }
    }, { threshold: 1 });

    if (reference.current && !isLast) {
      observer.observe(reference.current);
    }
    return () => {
      if (reference.current) {
        observer.unobserve(reference.current);
      }
    }
  }, [reference, isLast]);
  

  return (
    <main className="flex flex-col items-center gap-[20px] mt-10 mb-10">
      {code && <Edit title={''} body={''} id={''} isCreate={true} />}
      {sortedData.map((item) => {
        if (item.id != undefined){
          return(
            <Card key={item?.id.toString()} title={item?.title} index={item?.id} created_at={item?.created_at.split('T')[0]} />
          );
          }
      })}
      <div ref={reference}></div> 
    </main>
  );
}
export default Home;

// TODO: add loading spinner at the bottom of the page