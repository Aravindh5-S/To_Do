import React from 'react'

function SearchItems({ search, setSearch, items }) {
    return (

        <form onSubmit={(e) =>
            e.preventDefault()}
            className='px-3'>

            <input
                className='border border-black
                        ps-5
                        w-full
                        p-2 rounded-full'

                type="text"
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />


        </form>


    )
}

export default SearchItems