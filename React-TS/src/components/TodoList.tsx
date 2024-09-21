import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Todo as TodoType } from "./Todo.types";
import Todo from "./Todo";

export default function TodoList() {
  const [title, setTitle] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [getTodoList, setGetTodoList] = useState<boolean>(false);
  const generateTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = {
      title,
      completed: false,
    };
    await fetch("https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    }).then((res) => res.json());
    setTitle("");
    setGetTodoList((prev) => !prev);
    getAllTodo();
  };
  const editTodoHandler = (todoId: string) => {
    let mainTodo = todoList.find((todo) => todo.id === todoId);
    let completedValue = !mainTodo?.completed;
    fetch(
      `https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks/${todoId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ completed: completedValue }),
      }
    ).then((res) => {
      res.json();
      setGetTodoList((prev) => !prev);
      getAllTodo();
    });
  };
  const deleteTodoHandler = (todoId: string) => {
    fetch(
      `https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks/${todoId}`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      res.json();
    });
    setGetTodoList((prev) => !prev);
    getAllTodo();
  };
  const getAllTodo = async () => {
    const res = await fetch(
      "https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await res.json();
    setTodoList(data);
  };
  useEffect(() => {
    getAllTodo();
  }, [getTodoList]);
  return (
    <div className="container">
      <form
        className="flex border items-center justify-between border-gray-400 shadow-md rounded outline-none mx-auto mt-6 w-7/12 py-3 pr-1 pl-4"
        onSubmit={generateTodo}
      >
        <input
          type="text"
          className="outline-none border-none w-full h-full text-xl"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          className="border-l border-l-gray-600 flex items-center justify-center p-1"
          type="submit"
        >
          <FaPencilAlt></FaPencilAlt>
        </button>
      </form>
      {todoList.map((todo, index) => (
        <Todo
          key={index + 1}
          todo={todo}
          editTodoHandler={editTodoHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      ))}
    </div>
  );
}
