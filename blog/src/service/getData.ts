'use server'
export async function getData(page: Number, pageSize: Number) {
  const url = `${process.env.BaseUrl}/${process.env.USER}/${process.env.REPO}/issues?per_page=${pageSize}&page=${page}`;
  try {
    const res = await fetch(url, {
      method: 'GET', next: { revalidate: 1800 }
    });
    const data = await res.json();
    return data.map(({ number, title, body, created_at }: {number: Number; title: string; body: string, created_at: string}) => ({ id: number, title, body, created_at }));
  } catch (error) {
    console.log('error', error);
    return undefined;
  }
}