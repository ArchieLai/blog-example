'use client'
import { use, useContext, useEffect, useState } from "react";
import { DataContext } from '@/component/dataContext';
import { DataContextType, DataType } from "@/types/data";
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
import Edit from "@/component/edit";
import Delete from "@/component/delete";

// import { postSecret } from "@/service/auth"; 

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
    <div className="m-10 flex flex-col gap-5">
      {isLogin && <Delete id={params?.id}/>}
      {isLogin && <Edit title={record?.title} body={record?.body} id={params?.id}/>}
      <h2>{record?.title}</h2>
      <p>{record?.created_at.split('T')[0]}</p>
      <div className="bg-white p-5 rounded-xl">
        <ReactMarkdown className="prose lg:prose-xl max-w-none">{record?.body && (record?.body).toString()}</ReactMarkdown>
      </div>
    </div>
  );
}
export default Post;