import PropTypes from "prop-types";
import scss from "./FriendsListItem.module.scss";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
export default FriendsListItem;

FriendsListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
