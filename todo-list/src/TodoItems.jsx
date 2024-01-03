/* eslint-disable react/prop-types */
const TodoItems = (props) => {
    const {name, deleteItem, id, completedTask, isComplete} = props
    return(
        <>  
            <div style={{display: 'flex', justifyContent: 'space-around' ,color: 'white', backgroundColor: isComplete ? 'green' : '#242424'}}>
                <p>{name}</p>
                <button onClick={() => deleteItem(id)}>delete</button>
                <button onClick={() => completedTask(id)}>{isComplete ? 'Completed': 'Complete'}</button>
            </div>
        </>
    )
}
export default TodoItems