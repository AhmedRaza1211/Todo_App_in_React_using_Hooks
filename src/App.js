import Todo from './Hooks/todo'

function App() {

  let [todos1, inputValue1, onInputChange1, addTodo1, showTodo1] = Todo();

  return (
    <div>
      <h1> Todo App </h1>
      <input value={inputValue1} placeholder='Enter Todo' onChange={onInputChange1} />
      <button onClick={addTodo1}> Add Todo </button>
      <ol>
        {showTodo1}
      </ol>
    </div>
  );
}

export default App;
