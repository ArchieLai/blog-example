'use server'
export async function getData(page: Number, pageSize: Number) {
  const url = `${process.env.BaseUrl}/${process.env.USER}/${process.env.REPO}/issues?per_page=${pageSize}&page=${page}`;
  try {
    const res = await fetch(url, {
      method: 'GET', next: { revalidate: 1800 }
    });
    const data = await res.json();
    return data.map(({ number, title, body }: {number: Number; title: String; body: String}) => ({ id: number, title, body }));
  } catch (error) {
    console.log('error', error);
    return undefined;
  }
}