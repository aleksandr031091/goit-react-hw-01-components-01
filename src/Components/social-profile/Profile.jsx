import PropTypes from "prop-types";
import scss from "./Profile.module.scss";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="Аватар пользователя" class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">followers {stats.followers}</span>
        <span class="quantity">1000</span>
      </li>
      <li>
        <span class="label">Views {stats.Views}</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Likes {stats.Likes}</span>
        <span class="quantity">3000</span>
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
