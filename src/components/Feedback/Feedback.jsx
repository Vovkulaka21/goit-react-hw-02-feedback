import css from './Feedback.module.css';

import { Component } from 'react';

class Feedback extends Component {

  static feedbackOptions = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage(goodfeedback) {
    const total = this.countTotalFeedback();

    if (!total) {
      return 0;
    }

    const procent = (goodfeedback * 100) / total;

    return Math.round(Number(procent).toFixed(2));
  }

  yourFeedback(reaction) {
    this.setState(prevState => {
      return {
        [reaction]: prevState[reaction] + 1,
      };
    });
  }

  render() {
    const { good, neutral, bad } = this.state;

    const optionButton = Feedback.feedbackOptions.map(option => (
      <button
        onClick={() => this.yourFeedback(option)}
        key={option}
        className={css.button}
      >
        {option}
      </button>
    ));

    const procent = this.countPositiveFeedbackPercentage(good);

    const total = this.countTotalFeedback();

    return (
      <div className={css.box}>
        <h1 className={css.feedbacktitle}>Please Leave Feedback</h1>
        <div className={css.feedbackblock}>{optionButton}</div>

        <h2 className={css.titlestat}>Statistics</h2>
        <ul className={css.resultlist}>
          <li>Good: {good}</li>
          <li>Netural: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
        </ul>
        <p className={css.result}>Positive Feedback {procent} %</p>
      </div>
    );
  }
}

export default Feedback;
