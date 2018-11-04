import React from 'react';
import PropTypes from 'prop-types';

const TodoCard = ({
  title,
  discription,
  onCompleteClicked,
  onSkipClicked,
}) => (
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{discription}</p>
      <button
        type="button"
        className="btn btn-success"
        onClick={onCompleteClicked}
      >
        {'Complete'}
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={onSkipClicked}
      >
        {'Skip'}
      </button>
    </div>
  </div>
);

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  onCompleteClicked: PropTypes.func.isRequired,
  onSkipClicked: PropTypes.func.isRequired,
};

export default TodoCard;
