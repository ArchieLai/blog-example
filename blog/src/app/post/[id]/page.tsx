'use client'
import { useContext, useEffect, useState } from "react";
import { DataContext } from '@/component/dataContext';
import { DataContextType, DataType } from "@/types/data";
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
import Edit from "@/component/edit";
import Delete from "@/component/delete";

const Post = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const {data, code} = useContext<DataContextType>(DataContext);
  const [record, setRecord] = useState<DataType>(
    data.filter(r => r.id === Number(params.id))[0]
  );
  const [isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
    if (code != ""){
      setIsLogin(true);
    }
  }, [code]);
  
  //re-render after update
  useEffect(() => {
    setRecord(data.filter(r => r.id === Number(params.id))[0]);
  }, [data]);
  
  if (!record){
    router.push('/');
    return null;
  }
  return(
    <div className="m-10 flex flex-col gap-3">
      <h2 className="text-xl lg:text-2xl">{record?.title}</h2>
      
      <div className="flex flex-row items-center justify-between">
        <span className="text-base lg:text-lg">{record?.created_at.split('T')[0]}</span>
          {isLogin && <Edit title={record?.title} body={record?.body} id={params?.id}/>}
        </div>
      <div className="bg-white p-5 rounded-xl">
        <ReactMarkdown className="prose lg:prose-xl max-w-none">{record?.body && (record?.body).toString()}</ReactMarkdown>
      </div>
      <div className="text-center">
        {isLogin && <Delete id={params?.id}/>}
      </div>
    </div>
  );
}
export default Post;