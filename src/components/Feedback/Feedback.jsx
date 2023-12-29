import css from './Feedback.module.css';

import { Component } from 'react';

class Feedback extends Component {
  render() {
    return (
      <div>
        <h1>Please Leave Feedback</h1>
        <ul>
          <li>Good</li>
          <li>Netural</li>
          <li>Bad</li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good</li>
          <li>Netural</li>
          <li>Bad</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
