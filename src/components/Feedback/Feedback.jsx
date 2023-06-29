import React, { Component } from 'react'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import styles from './Feedback.module.css'
import Notification from './Notification'

class Feedback extends Component {
      state = {
  good: 0,
  neutral: 0,
          bad: 0,

}
    
    onGood = () => {
        this.setState(prevState => {
            this.setState({ color: 'green' });
            return {good: prevState.good + 1}
        })
     }
    onNeutral = () => { 
         this.setState(prevState => {
            return {neutral: prevState.neutral + 1}
        })
    }
    onBad = () => { 
         this.setState(prevState => {
            return {bad: prevState.bad + 1}
        })
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        const total =good + neutral + bad
        return total
    }
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback()
        const positive = Math.round((this.state.good / total) * 100) || 0
        return positive;
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        
        return (
            <div>
                <div className={styles.img}></div>
            <FeedbackOptions
              good={this.onGood}
              bad={this.onBad}
                    neutral={this.onNeutral}
                />
                {total > 0 ? (
                    <Statistics
                        good={good}
                        bad={bad}
                        neutral={neutral}
                        total={this.countTotalFeedback()}
                        positive={this.countPositiveFeedbackPercentage()}
                    />) : (
                    <Notification message="There is no feedback" />)}
          </div>
        );
    }
}




export default Feedback