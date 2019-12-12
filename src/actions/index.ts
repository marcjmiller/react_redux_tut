import {ActionTypes} from "../action-types";
import {AddTodoAction, ToggleTodoAction} from "../types";

let nextId = 0;

export function addTodo(title: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: nextId++,
        title: title,
        completed: false
      }
    }
  }
}

export function toggleTodo(todoId: number): ToggleTodoAction {
  return {
    type: ActionTypes.TOGGLE_TODO, payload: {todoId}
  }
}

export type Action = AddTodoAction | ToggleTodoAction;