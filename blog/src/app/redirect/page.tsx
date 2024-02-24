import { postSecret } from "@/service/auth";
import { redirect } from 'next/navigation'

const Redirect = async ({searchParams={code: undefined},}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const code = searchParams.code;
  if (code !== undefined ) {
    try {
      await postSecret(code);
    } catch (error) {
      console.log('redirect error:', error);
    }
  }
  return (
    <>
      {redirect(`/?code=${code}`)}
    </>
  );
}
export default Redirect;