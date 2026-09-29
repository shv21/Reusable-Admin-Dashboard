import Button from "./Button";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-96 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Close
        </Button>
      </div>
    </div>
  );
}
export default Modal;
