import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(({ title, id }) => {
        return (
          <button name={title} type="button" onClick={onLeaveFeedback} key={id}>
            {title}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
