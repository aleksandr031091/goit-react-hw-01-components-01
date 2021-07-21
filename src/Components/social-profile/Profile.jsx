import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={css.avatar}
        width="200px"
      />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span className={css.label}>followers {stats.followers}</span>
        <span className={css.quantity}>1000</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Views {stats.Views}</span>
        <span className={css.quantity}>2000</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Likes {stats.Likes}</span>
        <span className={css.quantity}>3000</span>
      </li>
    </ul>
  </div>
);

export default Profile;

Profile.prototype = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    Views: PropTypes.number.isRequired,
    Likes: PropTypes.number.isRequired,
  }),
};
