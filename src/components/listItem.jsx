import React from 'react'

function ListItems({ items, handleCheck, handleDelete, handleDeleteAll }) {
    return (
        <ul className='text-2xl py-9 px-3'>
            {items.map(
                (item) => (
                    <li className='
                          bg-gray-200 py-2 px-3 flex 
                          justify-between
                          items-center shadow
                          transform hover:scale-105
                          hover:px-6
                          hover:bg-gray-300
                          hover:shadow-xl
                          mb-2'>
                        <div>
                            <input type="checkbox"
                                className='mr-2 size-5'
                                id={item.id}
                                checked={item.checked}
                                onClick={() => handleCheck(item.id)}
                            />
                            <label htmlFor={item.id}
                                onDoubleClick={() => handleCheck(item.id)}
                                className={item.checked ? 'line-through' : null}
                            >
                                {item.content}
                            </label>
                        </div>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className='text-3xl text-gray-500 
                                font-semibold
                                hover:text-red-500
                                '>x</button>

                    </li>


                ))}
            {items.length > 1 ? <div className="text-center mt-5">
                <button className='text-center border bg-red-500 text-white p-2  rounded-full'
                    onClick={handleDeleteAll}>Delete All</button>
            </div> : null}
        </ul>
    )
}

export default ListItems