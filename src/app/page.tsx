import Link from "next/link";
import { getClient } from "./client";
import { deleteAction } from "@/actions/delete-action";

async function getTodos() {
  const client = await getClient();
  return client.task.findMany({});
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="w-[600px] mx-auto">
      <div className="text-center mt-[50px]">
        <Link
          href="/create-todo"
          className="text-white bg-indigo-500 px-4 py-2 rounded-[8px] min-w-[150px] mx-auto hover:bg-white hover:text-indigo-500 duration-300 ease-in cursor-pointer"
        >
          Создать задачу
        </Link>
      </div>
      <ul className="mt-[50px] space-y-6">
        {todos.map((todo) => (
          <li
            className="border-2 border-indigo-500 text-center text-indigo-500 rounded-[8px] px-3 py-2"
            key={todo.id}
            // onClick={deleteAction(todo.id)}
          >
            <h3 className="text-[24px]">{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
