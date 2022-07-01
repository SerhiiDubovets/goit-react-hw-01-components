import scss from './friend.module.scss'
import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem"

export const FriendList = ({friends}) => {
  return <ul className={scss.friend__list}>
  {friends.map(({id, name, avatar, isOnline}) => (<FriendListItem key={id} name={name} 
  avatar={avatar} isOnline={isOnline} />))}
</ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact(
    {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }
  ))
}