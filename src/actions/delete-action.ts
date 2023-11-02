'use server'

import { revalidatePath } from "next/cache";
import { getClient } from "../app/client"

export async function deleteAction(id: number) {
  const client = await getClient();
  await client.task.delete({
    where: {
      id,
    },
  })

  revalidatePath('/')
}