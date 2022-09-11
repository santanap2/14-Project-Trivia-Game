import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { player } = this.props;
    const goodScore = 3;
    return (
      <div data-testid="feedback-page">
        <Header />
        <h1>pagina de feedback</h1>
        <h3 data-testid="feedback-total-score">{player.score ? player.score : 0 }</h3>
        <p data-testid="feedback-text">
          { player.assertions < goodScore ? 'Could be better...' : 'Well Done!' }
        </p>
        <p>
          {'Acertou: '}
        </p>
        <p data-testid="feedback-total-question">{player.assertions}</p>
        <button
          type="submit"
          data-testid="btn-play-again"
          onClick={ this.handleClick }
        >
          Play Again

        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  player: PropTypes.shape({
    score: PropTypes.number.isRequired,
    assertions: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ player }) => ({
  player,
});

export default connect(mapStateToProps)(Feedback);
