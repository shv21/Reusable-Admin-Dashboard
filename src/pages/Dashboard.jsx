import { useState } from "react";
import Card from "../components/Card";
import UserList from "../components/UserList";
import useFetch from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import Input from "../components/Input";


function Dashboard() {
  const [search, setSearch] = useState("")

  const DebounceValue = useDebounce(search, 500)
  const { data: users, loading, error, } = useFetch("https://json-placeholder.mock.beeceptor.com/users");

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Card title="Total Users" value={loading ? "..." : users?.length} />

        <Card title="Total Posts" value="100" />

        <Card title="System Status" value="Active" />
      </div>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <UserList DebounceValue={DebounceValue} users={users} loading={loading} error={error} />
    </div>
  );
}

export default Dashboard;
