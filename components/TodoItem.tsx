import { ITodo } from "@/pages";
import React from "react";

interface IProps {
  todo: ITodo;
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void,
  handleDelete: (id: number) => void
}

export default function TodoItem(props: IProps) {

  const { handleCheck, handleDelete, todo} = props
  return (
    <div key={todo.id} className="flex justify-between items-center bg-slate-100 m-4 p-1 rounded-lg w-full">
      {todo.isCompleted ? <p className="my-2 line-through" >{todo.description}</p> : <p className="my-2" >{todo.description}</p>}
      <div className="bg-slate-500 p-2 rounded-xl">
        <input onChange={(event)=>handleCheck(event, todo.id)} className="mx-2" type="checkbox" name="" id=""/>
        <button onClick={() => handleDelete(todo.id)} className="text-red-600 font-bold antialiased">X</button>
      </div>
    </div>
  );
}
