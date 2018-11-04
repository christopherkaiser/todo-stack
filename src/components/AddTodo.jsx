import React from 'react';
import { PropTypes } from 'prop-types';

const AddTodo = ({
  formTitle,
  formDiscription,
  onTitleChange,
  onDiscritpionChange,
  onAddTodoClick,
}) => (
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Add Todo</h5>
      <form>
        <div className="form-group">
          <label htmlFor="todoTitle">
            {'Title'}
            <input
              type="text"
              className="form-control"
              id="todoTitle"
              aria-describedby="todoTitle"
              placeholder="Todo Title"
              value={formTitle}
              onChange={onTitleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="todoDiscription">
            {'Discritpion'}
            <textarea
              className="form-control"
              id="todoDiscription"
              rows="3"
              placeholder="Discription"
              value={formDiscription}
              onChange={onDiscritpionChange}
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onAddTodoClick}
        >
          {'Add'}
        </button>
      </form>
    </div>
  </div>
);

AddTodo.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formDiscription: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDiscritpionChange: PropTypes.func.isRequired,
  onAddTodoClick: PropTypes.func.isRequired,
};

export default AddTodo;
