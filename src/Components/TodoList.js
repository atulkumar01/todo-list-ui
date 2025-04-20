import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const todo = {
      id: Date.now(),
      title: newTodo,
      Comleted: false,
    };

    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.comleted } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="todo-button" onClick={handleAddTodo}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
