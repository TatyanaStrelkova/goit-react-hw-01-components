import PropTypes from 'prop-types'; 
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import { FriendsList } from './FriendList.styled'

const FriendList = ({ friends }) => {
    return <FriendsList>
        {friends.map(({ id, isOnline, avatar, name }) => <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />)}
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