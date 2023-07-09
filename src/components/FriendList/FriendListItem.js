import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
return (  <li className={css.item} >
    <span className={isOnline?css.statusOn:css.status}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>);
};
FriendListItem.propTypes = {    
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendListItem;
