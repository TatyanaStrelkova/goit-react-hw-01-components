import PropTypes from 'prop-types'; 

const FriendList = ({ friends }) => {
    return <ul class="friend-list">
        {friends.map(friend =>
        <li key={friend.id} class="item">
  <span class="status"></span>
  <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p class="name">{friend.name}</p>
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

export default FriendList;