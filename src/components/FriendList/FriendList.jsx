import PropTypes from 'prop-types'; 
import { FaUserAltSlash, FaUserCheck } from 'react-icons/fa';
import { FriendsList, FriendsItem, Avatar, FriendName, FriendStatus } from './FriendList.styled'

const FriendList = ({ friends }) => {
    return <FriendsList>
        {friends.map(friend =>
            <FriendsItem key={friend.id}> 
                <FriendStatus status={friend.isOnline}>{ friend.isOnline ? <FaUserAltSlash/> : <FaUserCheck/> } </FriendStatus>
  <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <FriendName>{friend.name}</FriendName>
</FriendsItem>)}
</FriendsList>
}
 
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}

export default FriendList;