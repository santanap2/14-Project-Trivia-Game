import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchQuestions } from '../helpers/triviaApi';
import Question from '../components/Question';

const ERROR_CODE = 3;
export default class GamePage extends Component {
  state = {
    questions: [],
  };

  async componentDidMount() {
    const { history } = this.props;
    const tokenLocalStorage = localStorage.getItem('token');
    const data = await fetchQuestions(tokenLocalStorage);
    if (data.response_code === ERROR_CODE) {
      localStorage.setItem('token', '');
      history.push('/');
    } else {
      this.setState({
        questions: data.results,
      });
    }
  }

  render() {
    const { questions } = this.state;
    return (
      <>
        <Header />
        <section>
          {questions && (
            <Question
              question={ questions[0] }
            />
          )}
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
