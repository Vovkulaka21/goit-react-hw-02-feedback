// import css from './Feedback.module.css';

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
        <ul>
          <li>
            <a href="#">Good</a>
          </li>
          <li>
            <a href="#">Netural</a>
          </li>
          <li>
            <a href="#">Bad</a>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good</li>
          <li>Netural</li>
          <li>Bad</li>
        </ul>
        <p>Positive Feedback %</p>
      </div>
    );
  }
}

export default Feedback;
