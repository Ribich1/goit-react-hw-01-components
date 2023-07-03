import PropTypes from 'prop-types';
import css from 'components/Statistics/Statics.module.css';

function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li key={stat.id} className="stat">
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
