import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Nav from "./components/Nav";
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Nav />
      {router}
    </>
  );
}
export default App;
