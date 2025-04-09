import React from "react";

function TodoList({ item, toggleTodo, deleteTodo }) {
  return (
    <>
      <li className="flex items-center justify-between bg-blue-50 m-2 p-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => {
              toggleTodo(item.id);
            }}
          />
          <span
            className="flex-1"
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              color: item.completed ? "gray" : "black",
            }}
            onClick={() => {
              toggleTodo(item.id);
            }}
          >
            {item.text}
          </span>
        </div>
        <button
          className=""
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          삭제
        </button>
      </li>
    </>
  );
}

export default TodoList;
