import Card from "@/component/card";
import { getData } from "@/service/fetch";

const Home = async () => {
  const items: Array<{number: Number; title: String; body: String}> = await getData();
  return (
    <main className="flex flex-col items-center gap-[20px] mt-10">
      {items.map((item, index) => (
        <Card key={index} title={item.title} index={item.number} />
      ))}
    </main>
  );
}
export default Home;