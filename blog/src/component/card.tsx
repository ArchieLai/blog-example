import Link from "next/link";

interface CardProps {
  title: String;
  index: Number;
}
const Card: React.FC<CardProps> = (props) => {
  return (
    <Link href={`/post/${props.index}`}>
      <div className='w-[80vw] h-[50px] bg-white text-wrap truncate shadow shadow-neutral-500 rounded-lg p-3'>
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}
export default Card;