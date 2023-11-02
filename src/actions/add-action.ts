'use server'

import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import { getClient } from "../app/client"

export async function addAction(data: FormData) {
  const title = data.get('title')
  const description = data.get('description')
  if (!description || !title) {
    return;
  }

  const client = await getClient();
  await client.task.create({
    data: {
      title: title.toString(),
      description: description.toString(),
    },
  })

  revalidatePath('/')
  redirect('/')
}