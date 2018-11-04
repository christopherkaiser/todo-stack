import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { getAddTodoForm } from '../reducers';
import { TITLE, DISCRIPTION } from '../constants/AddFormFields';
import { updateAddTodoForm, addTodo } from '../actions';

const AddTodoContainer = ({
  title,
  discription,
  updateAddTodoForm: update,
  addTodo: add,
}) => (
  <AddTodo
    formTitle={title}
    formDiscription={discription}
    onTitleChange={({ currentTarget }) =>
      update(TITLE, currentTarget.value)
    }
    onDiscritpionChange={({ currentTarget }) =>
      update(DISCRIPTION, currentTarget.value)
    }
    onAddTodoClick={() => add(title, discription)}
  />
);

AddTodoContainer.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  updateAddTodoForm: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  title: getAddTodoForm(state)[TITLE],
  discription: getAddTodoForm(state)[DISCRIPTION],
});

export default connect(
  mapStateToProps,
  { updateAddTodoForm, addTodo },
)(AddTodoContainer);
