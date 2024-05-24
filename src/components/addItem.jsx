import React, { useRef } from 'react'

function AddItem({ items, newItem, setNewItem, handleSubmit }) {

    const inputRef = useRef()


    return (
        <>
            <form className='w-full flex justify-between  items-center gap-3 px-3' onSubmit={handleSubmit}>
                <div className='w-full'>
                    <label htmlFor="addItem" className='text-3xl absolute left-[-99999px]'>{items.length ? "Add Item" : "Create_List"}</label>
                    <input className='border
                border-black
                w-full
                rounded-full
                p-2'
                        type='text'
                        id='addItem'
                        onChange={(e) => setNewItem(e.target.value)}
                        value={newItem}
                        placeholder='Add Item'
                        ref={inputRef}
                        autoFocus />
                </div>
                <button
                    className='bg-blue-500 text-white w-20 h-10 text-3xl font-bold rounded-full' type='submit'
                    onClick={() => inputRef.current.focus()}>+</button>
            </form>


        </>
    )
}

export default AddItem