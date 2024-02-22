'use client'
import Card from "@/component/card";
import { useContext } from "react";
import { DataContext } from '../component/dataContext';
import { DataContextType } from "@/types/data";

const Home = () => {
  const {data, page, setPage}: DataContextType = useContext(DataContext);
  return (
    <main className="flex flex-col items-center gap-[20px] mt-10">
      {data.map((item) => {
        return(
          <Card key={item.id.toString()} title={item.title} index={item.id} />
        );
      })}
    </main>
  );
}
export default Home;

// TODO: infinite scroll