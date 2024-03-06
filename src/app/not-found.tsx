// cannot use next/link in not-found
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-5">
      <h1 className="text-xl lg:text-3xl">Page Not Found</h1>
      <Link href="/" >
        <div className="w-[60px] lg:w-[100px] h-[30px] lg:h-[50px] bg-neutral-600 text-white flex justify-center items-center rounded-md text-sm lg:text-lg">
          Home
        </div>
      </Link>
    </div>
  );
}
export default NotFound;