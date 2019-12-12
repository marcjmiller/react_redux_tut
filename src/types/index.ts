import {ActionTypes} from "../action-types";

export interface Action {
  type: string,
  payload: any
}

export interface Todo {
  id: number,
  title: string,
  completed: boolean
}

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO,
  payload: { todo: Todo }
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO,
  payload: { todoId: number }
}

export interface State {
  todos: Todo[]
}