import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  function todoInputChange(event) {
    setTodoInput(event.target.value)
  }

  function addNewTodo() {
    setTodos([todoInput, ...todos])
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
          <section className="row mb-3 justify-content-center" id={index}>
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    id="firstCheckboxStretched"
                  />
                  <label
                    className="form-check-label stretched-link"
                    for="firstCheckboxStretched"
                  >
                    {todo}
                  </label>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <button className="btn btn-outline-secondary" type="button">
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
