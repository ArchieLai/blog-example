'use server';
export async function getToken(code: string ) {
  const url = `${process.env.TokenUrl}?client_id=${process.env.ClientId}&client_secret=${process.env.ClientKey}&code=${code}`;
  try {
    const res = await fetch(url, { 
      method: 'POST', 
      headers: { 'Accept': 'application/json' },       
      next: { revalidate: 7200 }
    });
    const data = await res.json();

    return data.access_token;
  } catch (error) {
    console.log('getToken error', error);
    return undefined;
  }
}
