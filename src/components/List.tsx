import React from "react";
import {connect} from "react-redux";
import {State, Todo} from "../types/";

const mapStateToProps = (state: State) => {
  return {todos: state.todos};
};

const ConnectedList = (todos: Todo[]) => (
  <ul>
    {todos.map((todo: Todo) => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;