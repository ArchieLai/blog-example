const url = 'https://api.github.com/repos/archielai/my-blog/issues';
export async function getData() {
  try {
    const res = await fetch(url, {method: 'GET'});
    const data = await res.json();
    return data.map(({ title, body }: {title: string; body: string}) => ({ title, body }));
  } catch (error) {
    console.log('error', error);
    return undefined;
  }
}