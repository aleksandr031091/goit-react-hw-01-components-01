import PropTypes from "prop-types";
import css from "./FriendsListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offLine}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

FriendsListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
