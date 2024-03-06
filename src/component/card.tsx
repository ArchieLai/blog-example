import Link from "next/link";
import { CardProps } from "@/types/component";

const Card: React.FC<CardProps> = (props) => {
  return (
    <Link href={`/post/${props?.index}`}>
      <div className='w-[90vw] lg:w-[60vw] h-[80px] lg:h-[100px] bg-white text-wrap truncate shadow shadow-neutral-500 rounded-lg p-3 flex items-center justify-between'> 
        <h2 className="text-lg lg:text-xl">{props?.title}</h2>
        <p className="text-base lg:text-lg text-gray-500">{props.created_at?.toString()}</p>
      </div>
    </Link>
  );
}
export default Card;