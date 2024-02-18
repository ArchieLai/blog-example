const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export function generateStaticParams() {
  return items.map((post) => ({
    id: String(post),
  }));
}

const Post = ({ params }: { params: { id: string } }) => {
  return(
    <div>
      <p>id is {params.id}</p>
    </div>
  );
}
export default Post;