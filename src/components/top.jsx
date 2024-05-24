import React from 'react'
import Header from './header'
import AddItem from './addItem'
import SearchItems from './searchItems'

function Top({ items, newItem, setNewItem, handleSubmit, search, setSearch }) {
    return (
        <div className='flex flex-col gap-3'>
            <Header
                title="To_Do App"

            />
            <AddItem
                items={items}
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
                search={search}
                setSearch={setSearch}

            />
            <SearchItems
                items={items}
                search={search}
                setSearch={setSearch}
            />
        </div>
    )
}

export default Top