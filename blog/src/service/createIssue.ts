'use server';
import { getToken } from "./getToken";

export default async function createIssue(code: string, formData: FormData) {
  const url = `${process.env.BaseUrl}/${process.env.USER}/${process.env.REPO}/issues`;
  try {
    const token = await getToken(code);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        contentType: 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({title: formData.get('title'), body: formData.get('body')}),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('createIssue error', error);
    return undefined;
  }
}