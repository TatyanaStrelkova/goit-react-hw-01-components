import PropTypes from 'prop-types'; 
import {ProfileContainer, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation,ProfileStats, ProfileStat, ProfileLabel, ProfileQuantity } from './Profile.styled'

const Profile = ({ userName, tag, location, avatar, stats: {followers, views, likes } }) => {
   return <ProfileContainer>
    <ProfileAvatar
      src={avatar}
      alt="User avatar"
    />
    <ProfileName>{userName}</ProfileName>
    <ProfileTag>@{tag}</ProfileTag>
    <ProfileLocation>{location}</ProfileLocation>
  

  <ProfileStats>
    <ProfileStat>
      <ProfileLabel>Followers</ProfileLabel>
      <ProfileQuantity>{followers}</ProfileQuantity>
    </ProfileStat>
    <ProfileStat>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuantity>{views}</ProfileQuantity>
    </ProfileStat>
    <ProfileStat>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuantity>{likes}</ProfileQuantity>
    </ProfileStat>
  </ProfileStats>
   </ProfileContainer>
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
   stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}


 
export default Profile;