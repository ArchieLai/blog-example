export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log('params', params);
  console.log('searchParams', searchParams);
  return (
    <>
      <h1>My Page</h1>
      <p>{searchParams.code}</p>
    </>
  );
}