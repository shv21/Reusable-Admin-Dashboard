function Sidebar() {
  return (
    <aside className="w-56 min-h-[calc(100vh-4rem)] bg-gray-900 text-white p-4">
      <nav>
        <ul className="space-y-2">

          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-800">
              Dashboard
            </button>
          </li>

          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800">
              Users
            </button>
          </li>

          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800">
              Settings
            </button>
          </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;