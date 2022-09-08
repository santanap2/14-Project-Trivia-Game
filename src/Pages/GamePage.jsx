import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GamePage extends Component {
  render() {
    return (
      <section>
        <p> Game Page </p>
      </section>
    );
  }
}

GamePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
