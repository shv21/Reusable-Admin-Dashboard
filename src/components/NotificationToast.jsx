import { useNotification } from "../context/NotificationContext";

function NotificationToast() {
  const { state, hideNotification } = useNotification();

  if (!state.message) {
    return null;
  }

  return (
    <div className="fixed top-5 right-5 bg-black text-white px-5 py-3 rounded-lg shadow-lg">
      <span>{state.message}</span>

      <button
        onClick={hideNotification}
        className="ml-4"
      >
        X
      </button>
    </div>
  );
}

export default NotificationToast;