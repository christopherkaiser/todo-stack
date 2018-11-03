import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { SKIP_TODO, REMOVE_TODO, ADD_TODO } from '../constants/ActionTypes';

const todosReducer = (state, action) => {
  const { todos } = state;
  switch (action.type) {
    case SKIP_TODO:
      return {
        ...state,
        todos:
          todos.length > 0 ? [...todos.slice(1, todos.length), todos[0]] : [],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: todos.length > 0 ? [...todos.slice(1, todos.length)] : [],
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...todos, action.todo],
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todosReducer,
  form: formReducer,
});

export default reducer;
