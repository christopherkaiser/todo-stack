import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import TodoCard from '../components/TodoCard';
import { getCurrentTodoTitle, getCurrnetTodoDiscription } from '../reducers';
import { completeTodo, skipTodo } from '../actions';

const TodoCardContainer = ({
  title,
  discription,
  completeTodo: completeAction,
  skipTodo: skipAction,
}) => (
  <TodoCard
    title={title}
    discription={discription}
    onCompleteClicked={completeAction}
    onSkipClicked={skipAction}
  />
);

TodoCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  skipTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  title: getCurrentTodoTitle(state),
  discription: getCurrnetTodoDiscription(state),
});

export default connect(
  mapStateToProps,
  { completeTodo, skipTodo },
)(TodoCardContainer);
