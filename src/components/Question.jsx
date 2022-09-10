import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const RANDOM = 0.5;
const ONE_SECOND = 1000;

export default class Question extends Component {
  state = {
    correct: '',
    wrong: '',
    timer: 30,
    isDisable: false,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer - 1 }));
    }, ONE_SECOND);
    // console.log(this.intervalID);
  }

  componentDidUpdate() {
    const { timer } = this.state;
    console.log(timer);
    if (timer === 1) {
      clearInterval(this.intervalID);
      this.setState({
        isDisable: true,
        timer: 30,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  checkAnswer = ({ target }) => {
    if (target.name === 'correct-answer') {
      console.log('Acertô mizeravi');
    } else {
      console.log('Que burrro, da zero pra ele');
    }
    this.setState({
      correct: 'correct',
      wrong: 'wrong',
    });
  };

  render() {
    const { question } = this.props;
    const { correct, wrong, isDisable } = this.state;
    let answers = [];
    if (question) {
      answers = [
        ...question.incorrect_answers.map((answer, index) => (
          <button
            key={ index }
            type="button"
            className={ wrong }
            name="incorrect-answer"
            onClick={ this.checkAnswer }
            data-testid={ `wrong-answer-${index}` }
            disabled={ isDisable }
          >
            {answer}
          </button>
        )),
        <button
          key="correct-answer"
          type="button"
          name="correct-answer"
          className={ correct }
          onClick={ this.checkAnswer }
          data-testid="correct-answer"
          disabled={ isDisable }
        >
          {question.correct_answer}
        </button>,
      ].sort(() => Math.random() - RANDOM);
    }
    return (
      <div>
        <h3 data-testid="question-category">
          {question && question.category}
        </h3>
        <p data-testid="question-text">
          {question && question.question}
        </p>
        {answers.length > 0 && (
          <div data-testid="answer-options">
            { answers }
          </div>
        ) }
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.shape(),
};

Question.defaultProps = {
  question: {
    incorrect_answers: [],
  },
};
