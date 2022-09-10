import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { player } = this.props;
    const goodScore = 3;
    return (
      <div data-testid="feedback-page">
        <Header />
        <h1>pagina de feedback</h1>
        <p data-testid="feedback-text">
          { player.countCorrected < goodScore ? 'Could be better...' : 'Well Done!' }
        </p>
      </div>
    );
  }
}

Feedback.propTypes = {
  player: PropTypes.shape({
    score: PropTypes.number.isRequired,
    countCorrected: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ player }) => ({
  player,
});

export default connect(mapStateToProps)(Feedback);
