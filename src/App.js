import Todo from './Hooks/todo'

function App() {

  let [todos1, inputValue, onInputChange, addTodo, showTodo] = Todo();

  return (
    <div>
      <h1> Todo App </h1>
      <input value={inputValue} placeholder='Enter Todo' onChange={onInputChange} />
      <button onClick={addTodo}> Add Todo </button>
      <ol>
        {showTodo}
      </ol>
    </div>
  );
}

export default App;
