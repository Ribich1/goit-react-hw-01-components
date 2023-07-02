import PropTypes from 'prop-types';

function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
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
