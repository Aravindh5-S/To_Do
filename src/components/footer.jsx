import React from 'react'

function Footer({ length }) {
    return (
        <div className="bg-blue-800 text-white py-1 text-2xl  w-full text-center  ">
            <p>{length} List {length <= 1 ? "item" : "items"}</p>
        </div>
    )
}

export default Footer