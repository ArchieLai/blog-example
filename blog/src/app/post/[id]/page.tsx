'use client'
import { useContext, useEffect, useState } from "react";
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
import Edit from "@/component/edit";

// import { postSecret } from "@/service/auth"; 

const Post = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const {data, code} = useContext<DataContextType>(DataContext);
  const record = data.filter(r => r.id === Number(params.id))[0];
  const [isLogin, setIsLogin] = useState(false);
  
  // TODO: change to postIssue
  // useEffect(() => {
  //     async function getToken() {
  //       const myToken = await getToken(code);
  //       setToken(myToken);
  //       setIsToken(true);
  //     }
  //     if (code !== "") {
  //       getToken();
  //     }
  // }, [code]);
  useEffect(() => {
    if (code != ""){
      setIsLogin(true);
    }
  }, [code]);
  
  if (!record){
    router.push('/not-found');
    return null;
  }
  return(
    <div className="m-10 flex flex-col gap-5">
      {isLogin && <Edit title={record.title} body={record.body} created_at={record.created_at}/>}
      <h2>{record.title}</h2>
      <p>{record.created_at.split('T')[0]}</p>
      <div className="bg-white p-5 rounded-xl">
        <ReactMarkdown className="prose lg:prose-xl max-w-none">{record && (record.body).toString()}</ReactMarkdown>
      </div>
    </div>
  );
}
export default Post;