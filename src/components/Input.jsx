import React from 'react'

function Input({value, onChange}) {
  return (
    <div>
        <input type="text"  className="bg-gray-500 p-2 text-amber-50 w-90 rounded-2xl m-2"
        placeholder="Search users..."
        value={value} onChange={onChange} />
    </div>
  )
}

export default Input