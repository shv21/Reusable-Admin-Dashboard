function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        {value}
      </h2>
    </div>
  );
}

export default Card;