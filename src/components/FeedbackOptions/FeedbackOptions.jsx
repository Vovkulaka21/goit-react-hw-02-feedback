import css from './FeddbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    const optionButton = options.map(option => (
        <button
          onClick={() => onLeaveFeedback(option)}
          key={option}
          className={css.button}
        >
          {option}
        </button>
      ));
  return (
    <div className={css.feedbackblock}>
      <h1 className={css.feedbacktitle}>Please Leave Feedback</h1>
      <div className={css.buttonblock}>{optionButton}</div>
    </div>
  );
};

export default FeedbackOptions