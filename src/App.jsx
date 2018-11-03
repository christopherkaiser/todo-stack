import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = ({ testProp }) => <div className="App">{testProp}</div>;

App.propTypes = {
  testProp: PropTypes.number.isRequired,
};

export default App;
