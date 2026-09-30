function Card({children}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
       <div className="text-sm font-medium text-gray-500">
      {children}
      </div>
    </div>
  );
}

export default Card;