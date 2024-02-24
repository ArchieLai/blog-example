'use client'
import { useContext, useEffect, useState } from "react";
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
// import { postSecret } from "@/service/auth"; 

const Post = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [isToken, setIsToken] = useState(false);
  const [token, setToken] = useState("");
  const {data, code} = useContext<DataContextType>(DataContext);
  const record = data.filter(r => r.id === Number(params.id))[0];

  // TODO: change to postIssue
  // useEffect(() => {
  //     async function getToken() {
  //       const myToken = await postSecret(code);
  //       setToken(myToken);
  //       setIsToken(true);
  //     }
  //     if (code !== "") {
  //       getToken();
  //     }
  // }, [code]);

  if (!record){
    router.push('/not-found');
    return null;
  }
  return(
    <div className="m-10">
      {/* {isToken && <p>{token}</p>} */}
      <h2>{record.title}</h2>
      <ReactMarkdown className="prose lg:prose-xl max-w-none">{record && (record.body).toString()}</ReactMarkdown>
    </div>
  );
}
export default Post;