'use client'
import { useContext } from "react";
import { DataContext } from '@/component/dataContext';
import { DataContextType } from "@/types/data";
import ReactMarkdown from 'react-markdown';

// cannot use generateStaticParams() in client component, which is server function run at build time
export const dynamicParams = false;

const Post = ({ params }: { params: { id: String } }) => {
  const {data} = useContext<DataContextType>(DataContext);
  const record = data.filter(r => r.id === Number(params.id))[0];
  
  return(
    <div className="m-10">
      <ReactMarkdown className="prose lg:prose-xl max-w-none">{record && (record.body).toString()}</ReactMarkdown>
    </div>
  );
}
export default Post;