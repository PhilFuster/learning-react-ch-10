import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = (props) => {
  const { name, using } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? 'used here' : 'not used here'}</p>
    </div>
  );
};
App.propTypes = {
  name: PropTypes.string,
  using: PropTypes.bool,
};
export default App;
