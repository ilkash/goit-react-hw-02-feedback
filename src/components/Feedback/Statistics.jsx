import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={styles.stat}>
      <h1 className={styles.title}>Statistics</h1>
      <ul className={styles.list}>
        <li className={styles.list_item}>Good: {good}</li>
        <li className={styles.list_item}>Neutral: {neutral}</li>
        <li className={styles.list_item}>Bad: {bad}</li>
        <li className={styles.list_item}>Total: {total}</li>
        <li className={styles.list_item}>Positive: {positive}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
