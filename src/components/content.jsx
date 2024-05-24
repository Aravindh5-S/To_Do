import React from 'react'
import List from './list'
function Content({ items, handleCheck, handleDelete, handleDeleteAll }) {
    return (
        <div>
            <List
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                handleDeleteAll={handleDeleteAll}
            />
        </div>
    )
}

export default Content