function Navbar() {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-gray-900">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-3">

        <span className="font-medium text-gray-700">
          Admin
        </span>
      </div>
    </nav>
  );
}

export default Navbar;