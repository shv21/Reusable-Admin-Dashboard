import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">
        User Details
      </h1>

      <p>
        User ID: {id}
      </p>
    </div>
  );
}

export default UserDetails;