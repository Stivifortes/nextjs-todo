import React from "react";

interface IProps {
  newTodo: string;
  setNewTodo: (value: React.SetStateAction<string>) => void,
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export default function Form( props: IProps) {
  const { newTodo, handleSubmit, setNewTodo} = props
  return (
    <form className="flex justify-center items-center w-full">
      <input
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        className="rounded-lg p-2"
        type="text"
        placeholder="Type a task"
      />
      <button
        type="submit"
        className="rounded-lg w-9 p-1 text-white m-2 bg-green-700 text-2xl"
        onClick={(event) => handleSubmit(event)}
      >
        +
      </button>
    </form>
  );
}
