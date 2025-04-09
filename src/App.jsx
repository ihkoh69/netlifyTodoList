import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  // const todos = [
  //   { id: 1, text: "할일 첫번째", completed: true },
  //   { id: 2, text: "할일 두번째", completed: false },
  //   { id: 3, text: "할일 세번째", completed: false },
  // ];

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem("todo");
    if (store) {
      setTodoList(JSON.parse(store));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo() {
    // alert("addTodo");
    if (input.trim() == "") {
      alert("할일을 입력하세요");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodoList([newTodo, ...todoList]);
    setInput("");
  }

  function deleteTodo(id) {
    // alert("deleteTodo " + id);
    setTodoList(
      todoList.filter((item) => {
        return item.id !== id ? item : null;
      })
    );
  }

  function toggleTodo(id) {
    // alert("toggleTodo " + id);
    setTodoList(
      todoList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  }

  return (
    <>
      <div className="container border rounded w-[500px] m-auto p-5">
        <h1 className="text-center">My TodoList App</h1>
        <div className="flex items-center justify-between border rounded p-2 m-2 gap-2">
          <input
            type="text"
            className="flex-1 border rounded m-2 p-2"
            placeholder="할일을 입력하세요"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="text-white bg-blue-300 p-2 rounded m-2"
            onClick={addTodo}
          >
            추가
          </button>
        </div>
        <div className="border-b mb-3 tb-3"></div>
        <div>
          <ul>
            {todoList.map((item, i) => {
              return (
                <TodoList
                  key={i}
                  item={todoList[i]}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
