import PropTypes from "prop-types";
import scss from "./FriendsList.module.scss";
import FriendsListItem from "../friendsListItem/FriendsListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((frend) => (
        <FriendsListItem
          frend={frend}
          key={frend.id}
          avatar={frend.avatar}
          name={frend.name}
          isOnline={frend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsList.prototype = {
  friends: PropTypes.arrayOf({
    frend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
