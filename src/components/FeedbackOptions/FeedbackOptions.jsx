import PropTypes from 'prop-types';

import { OptionsList, OptionsItem, OptionsBtn } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <OptionsList>
      {options.map(option => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <OptionsItem key={option}>
            <OptionsBtn
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {label}
            </OptionsBtn>
          </OptionsItem>
        );
      })}
    </OptionsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
