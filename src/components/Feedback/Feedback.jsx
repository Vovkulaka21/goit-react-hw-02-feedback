import css from './Feedback.module.css';

import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please Leave Feedback</h1>
        <ul className={css.list}>
          <li>
            <button type='submit' className={css.button}>Good</button>
          </li>
          <li>
            <button type='submit' className={css.button}>Netural</button>
          </li>
          <li>
            <button type='submit' className={css.button}>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul className={css.resultlist}>
          <li>Good</li>
          <li>Netural</li>
          <li>Bad</li>
        </ul>
        <h3 className={css.result}>Positive Feedback %</h3>
      </div>
    );
  }
}

export default Feedback;
