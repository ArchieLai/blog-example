'use server';
export async function postSecret(code: string | string[] ) {
  const url = `${process.env.TokenUrl}?client_id=${process.env.ClientId}&client_secret=${process.env.ClientKey}&code=${code}`;
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Accept': 'application/json' }, cache: 'force-cache'});
    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.log('postecret error', error);
    return undefined;
  }
}
