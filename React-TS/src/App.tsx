import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Nav from "./components/Nav";
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Nav />
      <div className="flex items-start gap-14 mt-6 px-16 w-full">
        <div className="flex items-center gap-4 justify-center w-full">
          <h3 className="font-extrabold text-xl bg-blue-50 px-4 py-2 rounded text-blue-800">
            Nasa
          </h3>
          <p className="text-sm text-blue-800">get data from nasa api</p>
        </div>
        <div className="flex items-center gap-4 justify-center w-full">
          <h3 className="font-extrabold text-xl bg-blue-50 px-4 py-2 rounded text-blue-800">
            TodoApp
          </h3>
          <p className="text-sm text-blue-800">create TodoApp with MockAPI</p>
        </div>
      </div>
      {router}
    </>
  );
}
export default App;
