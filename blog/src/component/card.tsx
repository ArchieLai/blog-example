import Link from "next/link";

interface CardProps {
  title: string;
  index: number;
}
const Card: React.FC<CardProps> = (props) => {
  return (
    <Link href={`/post/${props.index}`}>
      <div className='w-[80vw] h-[50px] bg-white text-wrap truncate shadow-md shadow-neutral-500 rounded-lg p-3'>
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}
export default Card;