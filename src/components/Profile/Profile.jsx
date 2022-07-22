import PropTypes from 'prop-types'; 
import {ProfileContainer, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation,ProfileStats, ProfileStat, ProfileLabel, ProfileQuantity } from './Profile.styled'

const Profile = ({ userName, tag, location, avatar, stats }) => {
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
      <ProfileQuantity>{stats.followers}</ProfileQuantity>
    </ProfileStat>
    <ProfileStat>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuantity>{stats.views}</ProfileQuantity>
    </ProfileStat>
    <ProfileStat>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuantity>{stats.likes}</ProfileQuantity>
    </ProfileStat>
  </ProfileStats>
   </ProfileContainer>
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}
 
export default Profile;