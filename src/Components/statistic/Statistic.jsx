import PropTypes from "prop-types";
import scss from "./Statistic.module.scss";

const Statistic = ({ stats }) => (
  <ul class="stat-list">
    {stats.map((stat) => (
      <li class="item" key={stat.id}>
        <span class="label">{stat.label}</span>
        <span class="percentage">{stat.percentage}</span>
      </li>
    ))}
  </ul>
);

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
