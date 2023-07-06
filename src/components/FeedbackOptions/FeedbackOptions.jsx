import React from 'react';
import styles from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={styles.list}>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
              className={styles.btn}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
