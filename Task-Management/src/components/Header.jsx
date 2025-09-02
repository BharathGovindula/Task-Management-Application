import { NavLink } from "react-router-dom";




const link = ({ isActive }) =>
`block px-3 py-2 rounded ${isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"}`;




export default function Sidebar() {
return (
<aside className="w-64 bg-white border-r p-4 space-y-4">
<h2 className="text-xl font-bold">Task Manager</h2>
<nav className="space-y-2">
<NavLink to="/" className={link}>All Tasks</NavLink>
<NavLink to="/completed" className={link}>Completed</NavLink>
<NavLink to="/pending" className={link}>Pending</NavLink>
<NavLink to="/profile" className={link}>Profile</NavLink>
</nav>
</aside>
);
}