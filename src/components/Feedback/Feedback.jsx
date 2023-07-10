import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import styles from './Feedback.module.css';
import Notification from '../Notification/Notification';

const Feedback = () => {
const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

const onLeaveFeedback = (option) => {
setFeedback((prevState) => ({
...prevState,
[option]: prevState[option] + 1,
}));
};

const countTotalFeedback = () => {
const { good, neutral, bad } = feedback;
const total = good + neutral + bad;
return total;
};

const countPositiveFeedbackPercentage = () => {
const { good } = feedback;
const total = countTotalFeedback();
const positiveFeedback = Math.round((good / total) * 100) || 0;
return positiveFeedback;
};

const { good, neutral, bad } = feedback;
const total = countTotalFeedback();
const options = Object.keys(feedback);

return (
<div>
<div className={styles.img}></div>
<FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
{total > 0 ? (
<Statistics
       good={good}
       bad={bad}
       neutral={neutral}
       total={countTotalFeedback()}
       positive={countPositiveFeedbackPercentage()}
     />
) : (
<Notification message="There is no feedback" />
)}
</div>
);
};

export default Feedback;