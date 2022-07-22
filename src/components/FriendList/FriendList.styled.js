import styled from "@emotion/styled";

const setIconColor = props => {
    switch (props.status) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return "black"
    }
}

export const FriendsList = styled.ul`
list-style: none;
`

export const FriendsItem = styled.li`
display: flex;
    align-items: center;
    padding: 30px;
    width: 300px;
    border: 2px solid #F5F5F5;
    border-radius: 4px;

    :not(:last-child) {
    margin-bottom: 10px;
`

export const FriendStatus = styled.span`
 svg {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    color: ${setIconColor};
 }
`

export const Avatar = styled.img`
  width: 50px;
    height: 50px;
`

export const FriendName = styled.p`
 margin-left: 20px;
    margin-top: 0;
    margin-bottom: 0;
`