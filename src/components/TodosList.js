import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChangeProps, deleteTodoProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
};

export default TodosList;
