'use server';
import { getToken } from "./getToken";
import { revalidatePath } from 'next/cache';

export default async function deleteIssue(code: string, id: string) {
  const url = `${process.env.BaseUrl}/${process.env.USER}/${process.env.REPO}/issues/${id}`;
  try {
    const token = await getToken(code);
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        contentType: 'application/json',
      },
      body: JSON.stringify({state: 'closed'}),
    });
    const data = await res.json();

    // revalidate cache
    revalidatePath(`/`);

    return data;
  } catch (error) {
    console.log('updateIssue error', error);
    return undefined;
  }
}