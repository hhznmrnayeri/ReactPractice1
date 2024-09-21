import { TiTick } from "react-icons/ti";
import { IoMdTrash } from "react-icons/io";
import { Todo as TodoType } from "./Todo.types";
type TodoProps = {
  todo: TodoType;
  editTodoHandler: (id: string) => boolean;
  deleteTodoHandler: (id: string) => boolean;
};
export default function Todo({
  todo,
  editTodoHandler,
  deleteTodoHandler,
}: TodoProps) {
  const editTodo = (id: string) => {
    editTodoHandler(id);
  };
  const deleteTodo = (id: string) => {
    deleteTodoHandler(id);
  };
  return (
    <div
      className={`note flex gap-4 items-center border border-blue-900 rounded shadow w-2/5 px-4 py-2  shadow-blue-700 mt-4 mx-auto ${
        todo.completed ? "completed" : "uncompleted"
      }`}
    >
      <h2 className="flex-grow text-xl text-gray-100">{todo.title}</h2>
      <button
        className="w-6 h-6 flex-shrink-0"
        onClick={() => {
          editTodo(todo.id);
        }}
      >
        <TiTick className="w-full h-full text-gray-300"></TiTick>
      </button>
      <button
        className="w-6 h-6 flex-shrink-0"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <IoMdTrash className="w-full h-full text-gray-300"></IoMdTrash>
      </button>
    </div>
  );
}
