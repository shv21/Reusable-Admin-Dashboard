import { useState } from "react";
import Card from "../components/Card";
import UserList from "../components/UserList";
import useFetch from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import Input from "../components/Input";
import { getUsers } from "../services/api";


function Dashboard() {
  const [search, setSearch] = useState("")

  const DebounceValue = useDebounce(search, 500)
  const { data: users, loading, error, } = useFetch(getUsers);

  return (
    <div className="max-w-7xl mx-auto">
      <div>

        <Card>
          <p>Total Users</p>
          <span>{loading ? "..." : users?.length ?? 0}</span> 
        </Card>
        <Card>
          <p>Total Posts</p>
          <span>100</span>
        </Card>
        <Card>
          <p>System Status</p>
          <span>Active</span>
        </Card>
      </div>

      <Input 
      type="text"
      placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <UserList DebounceValue={DebounceValue} users={users} loading={loading} error={error} />
    </div>
  );
}

export default Dashboard;
