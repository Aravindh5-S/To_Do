import React from 'react'
import ListItems from './listItem'
import AddItem from './addItem'

function List({ items, handleCheck, handleDelete, handleDeleteAll }) {
    return (
        <div>
            {
                items.length ?
                    <ListItems
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                        handleDeleteAll={handleDeleteAll}
                    />
                    :

                    <p className='text-2xl text-center'>Your List is Empty </p>

            }
        </div>
    )
}

export default List