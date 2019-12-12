import {ActionTypes} from "../action-types";
import {Action, State} from "../types";

export const initialState: State = {
  todos: []
};

function rootReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const todo = action.payload.todo;

      return {
        ...state,
        todos: [...state.todos, todo]
      };
    }

    case ActionTypes.TOGGLE_TODO: {
      const {todoId} = action.payload;

      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        )
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
