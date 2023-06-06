import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container, Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = Math.round((good / total) * 100) || 0;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <Container>
        <Wrapper>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedbackPercentage}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </Wrapper>
      </Container>
    );
  }
}
