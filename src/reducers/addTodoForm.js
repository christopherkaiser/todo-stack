import { UPDATE_ADD_TODO_FORM, ADD_TODO } from '../constants/ActionTypes';
import { TITLE, DISCRIPTION } from '../constants/AddFormFields';

const emptyState = {
  [TITLE]: '',
  [DISCRIPTION]: '',
};

const addTodoReducer = (state = emptyState, action) => {
  switch (action.type) {
    case UPDATE_ADD_TODO_FORM:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ADD_TODO:
      return emptyState;
    default:
      return state;
  }
};

export default addTodoReducer;

export const getForm = state => state;
