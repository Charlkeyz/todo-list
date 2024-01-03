/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import InputTodoList from './InputTodoList'
import TodoItems from './TodoItems'

function App() {
  const [enterInput, setEnterInput] = useState('')
  const [todoItems, setTodoItems] = useState([])
  const [itemIndex, setItemIndex] = useState(0)

  function handleInput(e) {
    setEnterInput( e.target.value )
  }

  function addToList(){
    const listOfItem = {
      id: itemIndex + 1,
      name: enterInput, 
      isComplete: false
    }
    setItemIndex(itemIndex + 1)
    setTodoItems([...todoItems, listOfItem])
    setEnterInput('')
    console.log()
  }
  function completedTask(id){
    setTodoItems(todoItems.map((task)=> {
      return task.id === id ? {...task, isComplete: true}: task
    }))
  }
  
  
  function deleteItem(task){
    const newTodoList = todoItems.filter((item) => item.id !== task )
    setTodoItems(newTodoList)
    
    
     
  }
  
  return (
    <>   
      <InputTodoList handleInput = {handleInput} addToList = {addToList} enterInput = {enterInput}/>
     
        { 
          todoItems.map((items)=> {
            return <TodoItems key = {items.id} id = {items.id} name = {items.name} deleteItem = {deleteItem} completedTask = {completedTask} isComplete = {items.isComplete}/>
          })
        }
      
      
            
    </>
  )
}

export default App
