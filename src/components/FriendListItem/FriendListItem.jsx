import PropTypes from 'prop-types'; 
import { FaUserAltSlash, FaUserCheck } from 'react-icons/fa';
import { FriendsItem, Avatar, FriendName, FriendStatus } from './FriendListItem.styled'

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return <FriendsItem>
        <FriendStatus status={isOnline}>{isOnline ? <FaUserAltSlash /> : <FaUserCheck />} </FriendStatus>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
    </FriendsItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

