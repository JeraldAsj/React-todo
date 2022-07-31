/** @format */
import React, { useEffect, useState } from "react";

import "./App.css";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import {
  Weapper,
  Heading,
  Fillter,
  Delete,
  Button,
  MainContainer,
  MainContainerOne,
  Span,
} from "./App.style";
const App = () => {
  const [todos, setTodos] = useState([
    { name: "React", description: "Compleate Todo list", status: true },
  ]);
  const [filterTodos, setFilterTodos] = useState([
    { name: "React", description: "Compleate Todo list", status: true },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const handleSaveTodo = (formData) => {
    setTodos([...todos, formData]);
    setFilterTodos([...todos, formData]);
  };
  const deleteTodo = (id, tag) => {
    if (tag == "all") {
      setFilterTodos([]);
      setTodos([]);
    } else if (tag == "done") {
      const todolist = todos.filter((todo, index) => !todo.status);
      setTodos(todolist);
      setFilterTodos(todolist);
    } else {
      const todolist = todos.filter((todo, index) => index != id);
      setTodos(todolist);
      setFilterTodos(todolist);
    }
  };
  const editeTodo = (id, todoData) => {
    const todolist = todos.filter((todo, index) => index != id);
    setTodos(todolist);
    setFilterTodos(todolist);
    setFormData(todoData);
  };
  const updateTodo = (id) => {
    const todolist = todos.map((todo, index) => {
      if (index == id) {
        return {
          ...todo,
          status: !todo.status,
        };
      } else {
        return {
          ...todo,
        };
      }
    });
    setTodos(todolist);
    setFilterTodos(todolist);
  };

  const filter = (value) => {
    if (value == "all") {
      setFilterTodos(todos);
    } else if (value == "done") {
      const todolist = todos.filter((todo, index) => todo.status);
      setFilterTodos(todolist);
    } else {
      const todolist = todos.filter((todo, index) => !todo.status);
      setFilterTodos(todolist);
    }
  };

  return (
    <Weapper className="App">
      <Heading>Todos List</Heading>

      <AddTodo
        saveTodo={handleSaveTodo}
        formData={formData}
        setFormData={setFormData}
      />
      <Heading>Filtter By</Heading>

      <Fillter>
        <Button btn="All" onClick={() => filter("all")}>
          All
        </Button>
        <Button btn="Done" onClick={() => filter("done")}>
          Done
        </Button>
        <Button btn="Todo" onClick={() => filter("todo")}>
          Todo
        </Button>
      </Fillter>
      {filterTodos.length > 0 ? (
        filterTodos.map((todo, index) => (
          <TodoItem
            key={todo.index}
            editeTodo={editeTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            todo={todo}
            index={index}
          />
        ))
      ) : (
        <MainContainer>
          {console.log("jjjjj")}
          <MainContainerOne>
            <Heading>Todo list are not available</Heading>
            <Span>Give your task name and clicke to add todo button</Span>
          </MainContainerOne>
        </MainContainer>
      )}

      <Delete>
        <Button btn="Delete" onClick={() => deleteTodo("", "done")}>
          Delete Done Tasks
        </Button>
        <Button btn="Delete" onClick={() => deleteTodo("", "all")}>
          Delete All Tasks
        </Button>
      </Delete>
    </Weapper>
  );
};

export default App;
