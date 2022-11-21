import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    document.title = `Todo Item Count: ${todos.length}`;
  });

  function todoInputChange(event) {
    setTodoInput(event.target.value);
  }

  function addNewTodo() {
    setTodos([{text:todoInput, isDone:false}, ...todos]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  }

  function checkDone(index) {
    setTodos(todos.map((todo, todoIndex) => {
      if (todoIndex !== index) {
        return todo;
      }

      todo.isDone = !todo.isDone;
      return todo;
    }))
  }

  return (
    <>
      <div className="container">
        <p className="fs-1 text-center my-5">To Do List</p>
        <header className="row mb-3 justify-content-center">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              value={todoInput}
              onChange={todoInputChange}
              placeholder="Write to your list"
            />
          </div>
          <div className="col-1">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={addNewTodo}
            >
              Add
            </button>
          </div>
        </header>
        {todos.map((todo, index) => (
          <section className="row mb-3 justify-content-center" key={index}>
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <label
                    className="form-check-label stretched-link"
                    htmlFor="firstCheckboxStretched"
                    style={{cursor: 'pointer'}} onClick={() => checkDone(index)}
                  >
                    {todo.isDone
                     ? <s>{todo.text}</s>
                     : <span>{todo.text}</span>
                    }
                  </label>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default App;
