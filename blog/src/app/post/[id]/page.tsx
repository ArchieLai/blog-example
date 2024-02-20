import { getData } from "@/service/fetch";

export async function generateStaticParams() {
  const items: Array<{number: Number; title: String; body: String}> = await getData();
  return items.map((item) => ({
    id: item.number.toString(),
  }));
}

const Post = ({ params }: { params: { id: String } }) => {
  // const items: Array<{number: Number; title: String; body: String}> = await getData();
  return(
    <div>

    </div>
  );
}
export default Post;