import Link from "next/link";
import { CardProps } from "@/types/component";

const Card: React.FC<CardProps> = (props) => {
  return (
    <Link href={`/post/${props.index}`}>
      <div className='w-[80vw] h-[60px] bg-white text-wrap truncate shadow shadow-neutral-500 rounded-lg p-3 flex items-center'>
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}
export default Card;