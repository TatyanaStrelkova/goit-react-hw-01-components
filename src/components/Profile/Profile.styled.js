import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
padding-top: 20px;
    margin-top: 40px;
    border: 1px solid #F5F5F5;
    border-radius: 5px;
   width: 500px;
   text-align: center;
`

export const ProfileAvatar = styled.img`
width: 50px;
        height: 50px;
`

export const ProfileName = styled.p`
 margin-top: 10px;
    margin-bottom: 10px;`

export const ProfileTag = styled.p`
 color: #808080;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;    
`

export const ProfileLocation = styled.p`
 margin-top: 10px;
        margin-bottom: 40px;
        color: #808080;
        font-size: 20px; 
`

export const ProfileStats = styled.ul`
display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 0;
   margin: 0;
   height: 80px;
background-color: #D3D3D3;
list-style: none;
border: 1px solid #A9A9A9;
`

export const ProfileStat = styled.li`
display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;

    :not(:last-child) {
    border-right: 1px solid #A9A9A9;
}
`
export const ProfileLabel = styled.span`
font-size: 18px;
    color: #808080;
    `

export const ProfileQuantity = styled.span`
font-size: 20px;
    font-weight: bold;
`

