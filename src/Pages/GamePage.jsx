import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class GamePage extends Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <p> Game Page </p>
        </section>
      </>
    );
  }
}

GamePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
