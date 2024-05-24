import { useEffect, useState } from 'react'
import Content from './components/content'
import Footer from './components/footer'
import Top from './components/top'

function App() {

  // States //

  const [items, setItems] = useState([])

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('todo_list')) || []
    setItems(item)

  }, [])


  // Necessary function //

  function setLocal(item) {

    setItems(item)
    localStorage.setItem("todo_list", JSON.stringify(item))
  }

  // Add Item //


  const addItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, content: newItem };

    const addedList = [...items, addNewItem]
    console.log(addedList);
    setLocal(addedList)
  }


  // Handle Check Function //

  function handleCheck(id) {
    const checkList = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    )
    setLocal(checkList)

  }

  // Handle Delete Function //

  //  Unique //

  function handleDelete(id) {
    const deleteList = items.filter((item) =>
      item.id !== id
    )
    setLocal(deleteList)
  }

  // All //

  function handleDeleteAll() {
    const isOk = confirm("Want to delete all ?")
    const emptyArray = []
    if (isOk) {
      setLocal(emptyArray)
    }
    else return
  }


  // Handle Submit //

  function handleSubmit(e) {
    e.preventDefault()
    if (!newItem) return;
    setNewItem('')
    addItem()
  }






  // Return //


  return (
    <div className="w-app min-h-screen border border-black overflow-hidden relative flex flex-col justify-between gap-5">
      <Top
        title="To_Do App"
        items={items}
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />

      <Content
        items={items.filter((item) => (item.content).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
      <Footer
        length={items.length}
      />
    </div>
  )
}

export default App
