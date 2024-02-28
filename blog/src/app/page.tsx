'use client'
import Card from "@/component/card";
import { useContext, useEffect, useState } from "react";
import { DataContext } from '../component/dataContext';
import { DataContextType } from "@/types/data";
import Create from "@/component/create";

const Home = () => {
  const {data, page, setPage, code, setCode}: DataContextType = useContext(DataContext);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const myCode = url.searchParams.get('code');
    if (myCode !== null) {
      setCode(myCode);
      setIsLogin(true);
    }
  }, [code, data]);

  return (
    <main className="flex flex-col items-center gap-[20px] mt-10">
      {isLogin && <Create code={code} />}
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