import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-56 min-h-screen border-r border-gray-200 p-4">
      <nav className="flex flex-col gap-2">

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/users">
          Users
        </NavLink>

        <NavLink to="/dashboard/settings">
          Settings
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;