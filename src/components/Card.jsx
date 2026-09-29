function Card({children}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
       <p className="text-sm font-medium text-gray-500">
        {/* {title} */}
      {children}
      </p>
    </div>
  );
}

export default Card;