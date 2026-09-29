import formatDate from "../utils/formatDate";
import Button from "./Button";

function UserCard({ user, onClick }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
      <div>
        <h3 className="font-medium text-gray-900">
          {user.name}
        </h3>

        <p className="text-sm text-gray-500">
          {user.email}
        </p>
      </div>

      <span className="text-sm text-gray-500">
        {user.username}
      </span>
      
      <Button  onClick={() => onClick(user)}>
        View
      </Button>
    </div>
  );
}

export default UserCard;