import PropTypes from 'prop-types'; 
import { FaUserAltSlash } from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
        {friends.map(friend =>
            <li key={friend.id} className={css.item}> 
               { friend.isOnline ? <FaUserAltSlash className={css.status}/> : <FaUserCheck className={`${css.status} ${css.online}`}/> } 
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
</li>)}
</ul>
}
 
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}
console.log(css.name)

export default FriendList;