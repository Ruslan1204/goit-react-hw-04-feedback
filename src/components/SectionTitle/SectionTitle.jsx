import PropTypes from 'prop-types';
import css from '../SectionTitle/SectionTitle.module.css'

export const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

