"use client";

import { addAction } from "@/actions/add-action";

export default function AddTodo() {
  return (
    <form
      action={addAction}
      className="w-[400px] mx-auto mt-10 flex flex-col space-y-5"
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-indigo-500 border-2 border-indigo-500 px-3 py-2 rounded-[8px] placeholder:text-indigo-300"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="text-indigo-500 border-2 border-indigo-500 px-3 py-2 rounded-[8px] placeholder:text-indigo-300"
      />
      <input
        type="submit"
        className="text-white bg-indigo-500 px-4 py-2 rounded-[8px] min-w-[150px] mx-auto hover:bg-white hover:text-indigo-500 duration-300 ease-in cursor-pointer"
      />
    </form>
  );
}
