import React from 'react'
import SearchItems from './searchItems'
import AddItem from './addItem'


function Header({ title }) {
    return (
        <>
            <h1 className="bg-blue-800 text-white p-4 text-3xl">
                {title}
            </h1>


        </>
    )
}

export default Header