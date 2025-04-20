import React from "react";

function TodoItem({ todo, toggleComplete, onDelete }) {
  return (
    <div className={`todo-item $ {todo.completed ? 'completed' : ' '}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>🎃</button>
    </div>
  );
}

export default TodoItem;
