import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="bg-blue-200 py-2 flex items-center justify-evenly text-white child:rounded child:border child:border-blue-800 child:bg-blue-700 child:shadow-blue-800 child:px-4 child:py-2 px-4">
      <NavLink to="/nasa">NasaList</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">TodoApp</NavLink>
    </nav>
  );
}
