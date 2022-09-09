import React, { Component } from "react";

const RANDOM = 0.5;

export default class Question extends Component {
  checkAnswer = ({ target }) => {
    if (target.name === "correct-answer") {
      console.log("Você acertou, parabéns!!");
    } else {
      console.log("Que burrro, da zero pra ele");
    }
  };

  render() {
    const { questions } = this.props;
    let answers = [];
    if (questions.length > 0 && questions[0]) {
      answers = [
        ...questions[0].incorrect_answers.map((answer, index) => (
          <button
            key={ index }
            type="button"
            name="incorrect-answer"
            onClick={ this.checkAnswer }
            data-testid={ `wrong-answer-${index}` }
          >
            {answer}
          </button>
        )),
        <button
          key="correct-answer"
          type="button"
          name="correct-answer"
          onClick={ this.checkAnswer }
          data-testid="correct-answer"
        >
          {questions[0].correct_answer}
        </button>,
      ];
    }
    return (
      <div>
        <h3 data-testid="question-category">
          {questions.length > 0 && questions[0].category}
        </h3>
        <p data-testid="question-text">
          {questions.length > 0 && questions[0].question}
        </p>
        {answers.length > 0 && (
          <div data-testid="answer-options">
            { answers.sort(() => Math.random() - RANDOM) }
          </div>
        ) }
      </div>
    );
  }
}
