'use server';
import { getToken } from "./getToken";
import { revalidatePath } from 'next/cache';

export default async function updateIssue(code: string, formData: FormData, id: string) {
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
      body: JSON.stringify({title: formData.get('title'), body: formData.get('body')}),
    });
    const data = await res.json();

    // revalidate cache
    revalidatePath(`/post/${id}`);

    return data;
  } catch (error) {
    console.log('updateIssue error', error);
    return undefined;
  }
}