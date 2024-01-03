/* eslint-disable react/prop-types */
const InputTodoList = (props) => {
    const {handleInput, addToList, enterInput} = props;
    return(
        <>
            <div style={{display: 'flex', backgroundColor: 'blue', padding: 50}}>
                <input onInput={handleInput} value={enterInput}/>
                <button onClick={addToList}>Add Item</button>
            </div>
            
            
        </>
    )
    
}
export default InputTodoList    