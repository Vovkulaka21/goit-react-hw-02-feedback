import css from './FeedbackStat.module.css'

const FeedbackStat = ({good, neutral, bad, total, positivePercentage}) =>
{
    if (total === 0) {
        return (<p>There is no feedback</p>)
    }
    return ( 
    <> 
    <h2 className={css.titlestat}>Statistics</h2>
    <ul className={css.resultlist}>
      <li>Good: {good}</li>
      <li>Netural: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
    </ul>
    <p className={css.result}>Positive Feedback {positivePercentage} %</p>
    </> )     
}

export default FeedbackStat