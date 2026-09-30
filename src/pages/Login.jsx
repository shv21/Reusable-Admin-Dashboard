import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/dashboard");
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        Login
      </h1>

      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-black text-white rounded"
      >
        Login
      </button>

    </div>
  );
}

export default Login;