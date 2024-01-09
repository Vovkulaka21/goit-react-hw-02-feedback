import css from './Feedback.module.css';

import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import FeedbackStat from 'components/FeedbackStat/FeedbackStat';

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

  yourFeedback = (reaction) => {
    this.setState(prevState => {
      return {
        [reaction]: prevState[reaction] + 1,
      };
    });
  }

  render() {
    const { good, neutral, bad } = this.state;

    const procent = this.countPositiveFeedbackPercentage(good);

    const total = this.countTotalFeedback();

    return (
      <div className={css.box}>
      <FeedbackOptions options={Feedback.feedbackOptions} onLeaveFeedback={this.yourFeedback}/>
<FeedbackStat good={good} neutral={neutral} bad={bad} total={total} positivePercentage={procent}/>
      </div>
    );
  }
}

export default Feedback;
