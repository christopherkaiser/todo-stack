import * as constants from '../constants/ActionTypes';

export const completeTodo = () => dispatch =>
  dispatch({
    type: constants.COMPLETE_TODO,
  });

export const skipTodo = () => dispatch =>
  dispatch({
    type: constants.SKIP_TODO,
  });

export const addTodo = (title, discription) => dispatch =>
  dispatch({
    type: constants.ADD_TODO,
    title,
    discription,
  });

export const updateAddTodoForm = (key, value) => dispatch =>
  dispatch({
    type: constants.UPDATE_ADD_TODO_FORM,
    key,
    value,
  });
