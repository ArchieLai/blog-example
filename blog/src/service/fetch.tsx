const url = `${process.env.Fetch_BaseURL}/${process.env.USER}/${process.env.REPO}/issues`;
export async function getData() {
  try {
    const res = await fetch(url, {method: 'GET', next: { revalidate: 1800 }});
    const data = await res.json();
    return data.map(({ number, title, body }: {number: Number; title: String; body: String}) => ({ number, title, body }));
  } catch (error) {
    console.log('error', error);
    return undefined;
  }
}