import React from 'react';
import styles from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'
const FeedbackOptions = ({ good, bad, neutral }) => {
  return (
    <div>
          <h1 className={styles.title}>Please leave feedback</h1>
          <div className={styles.container_btn}>
              <button className={styles.btn} type="button" onClick={good}>
        Good
      </button>
      <button className={styles.btn} type="button" onClick={neutral}>
        Neutral
      </button>
      <button className={styles.btn} type="button" onClick={bad}>
        Bad
              </button>
              </div>
    </div>
  );
};
FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
