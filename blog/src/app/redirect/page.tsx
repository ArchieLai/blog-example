import { postSecret } from "@/service/auth";
import { redirect } from 'next/navigation'

const Redirect = async ({
  params,
  searchParams={code: undefined},
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const code = searchParams.code;
  let myToken = '';

  if (code !== undefined ) {
    try {
      const token = await postSecret(code);
      myToken = token;
    } catch (error) {
      console.log('redirect error:', error);
    }
  }
  return (
    <>
      {redirect(`/?token=${myToken}`)}
    </>
  );
}
export default Redirect;