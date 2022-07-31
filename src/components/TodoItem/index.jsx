/** @format */

import React from "react";
import {
  Weapper,
  MainContainer,
  MainContainerOne,
  MainContainerTwo,
  Span,
  Heading,
  Button,
  Fillter,
  Delete,
} from "./TodoItem.style";
const Todo = ({ todo, editeTodo, updateTodo, deleteTodo, index }) => {
  const checkTodo = /*  todo.status ?  */ `line-through`; /* : "" */
  return (
    <Weapper>
      <MainContainer>
        <MainContainerOne>
          <Heading status={todo.status}>{todo.name}</Heading>
          <Span status={todo.status}>{todo.description}</Span>
        </MainContainerOne>
        <MainContainerTwo className="Card--button">
          {!todo.status && (
            <Button btn="Edit" onClick={() => editeTodo(index, todo)}>
              Edit
            </Button>
          )}

          <Button btn="Complete" onClick={() => updateTodo(index)}>
            {todo.status ? "UnComplete" : "Complete"}
          </Button>
          <Button btn="Delete" onClick={() => deleteTodo(index)}>
            Delete
          </Button>
        </MainContainerTwo>
      </MainContainer>
    </Weapper>
  );
};

export default Todo;
