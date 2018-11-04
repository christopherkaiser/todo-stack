import { combineReducers } from 'redux';
import DefaultEmptyTodo from '../constants/DefaultEmptyTodo';
import {
  SKIP_TODO,
  ADD_TODO,
  COMPLETE_TODO,
} from '../constants/ActionTypes';
import addTodoReducer, { getForm } from './addTodoForm';

const todosReducer = (
  state = [
    { title: 'First Todo', discription: 'the first todo' },
    { title: 'Second Todo', discription: 'the Second todo' },
  ],
  action,
) => {
  switch (action.type) {
    case COMPLETE_TODO:
      return state.length > 0 ? [...state.slice(1, state.length)] : [];

    case SKIP_TODO:
      return state.length > 0
        ? [...state.slice(1, state.length), state[0]]
        : [];

    case ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          discription: action.discription,
        },
      ];

    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todosReducer,
  addTodoForm: addTodoReducer,
});

export default reducer;

const currentTodo = state => state.todos[0] || DefaultEmptyTodo;

export const getAddTodoForm = state => getForm(state.addTodoForm);
export const getCurrentTodoTitle = state => currentTodo(state).title;
export const getCurrnetTodoDiscription = state =>
  currentTodo(state).discription;
