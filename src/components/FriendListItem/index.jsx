import scss from './FriendListItem.module.scss'
import PropTypes from 'prop-types';


export const FriendListItem = ({ name, avatar, isOnline}) =>{
  return <li className={scss.friend__item}>
  <span className={`${scss.friend__status} ${scss[isOnline]}` }></span>
  {/* <span className={`${scss.friend__status} ${isOnline ? scss.statusOn : scss.statusOff}` }>{isOnline}</span> */}
  <img className={scss.friend__avatar} src={avatar} alt="User avatar" width="48" />
  <p className={scss.friend__name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
   isOnline: PropTypes.bool,
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
}