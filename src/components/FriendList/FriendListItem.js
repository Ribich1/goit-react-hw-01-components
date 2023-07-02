import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
return (  <li className="item" >
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>);
};
FriendListItem.propTypes = {    
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendListItem;
