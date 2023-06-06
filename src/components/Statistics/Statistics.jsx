import PropTypes from 'prop-types';
import {
  StatisticList,
  StatisticItem,
  StatisticText,
} from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticList>
      <StatisticItem>
        <StatisticText>Good:</StatisticText>
        <span>{good}</span>
      </StatisticItem>
      <StatisticItem>
        <StatisticText>Neutral:</StatisticText>
        <span>{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        <StatisticText>Bad:</StatisticText>
        <span>{bad}</span>
      </StatisticItem>
      <StatisticItem>
        <StatisticText>Total:</StatisticText>
        <span>{total}</span>
      </StatisticItem>
      <StatisticItem>
        <StatisticText>Positive feedback:</StatisticText>
        <span>{positivePercentage}%</span>
      </StatisticItem>
    </StatisticList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
