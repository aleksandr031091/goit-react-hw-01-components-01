import PropTypes from "prop-types";
import css from "./Statistic.module.css";

const Statistic = ({ stats }) => (
  <ul className={css.statist}>
    {stats.map((stat) => (
      <li
        className={css.item}
        key={stat.id}
        style={{ backgroundColor: randomColor() }}
      >
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}</span>
      </li>
    ))}
  </ul>
);

const randomColor = () => {
  return `rgb(
    ${Math.floor(Math.random() * 250)}
    ${Math.floor(Math.random() * 250)}
    ${Math.floor(Math.random() * 250)}
  )`;
};

export default Statistic;

Statistic.prototype = {
  stats: PropTypes.arrayOf({
    stat: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  }),
};
