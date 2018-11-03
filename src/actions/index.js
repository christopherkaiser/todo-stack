import * as constants from '../constants/ActionTypes';

export const skipTodo = () => ({
  type: constants.SKIP_TODO,
});

export const removeTodo = () => ({
  type: constants.REMOVE_TODO,
});

export const addTodo = todo => ({
  type: constants.ADD_TODO,
  todo,
});
