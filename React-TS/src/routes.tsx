import NasaList from "./components/NasaList";
import TodoList from "./components/TodoList";
let routes = [
  { path: "/nasa", element: <NasaList /> },
  { path: "/todo", element: <TodoList /> },
];
export default routes;
