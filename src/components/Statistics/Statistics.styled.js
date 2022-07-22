import styled from "@emotion/styled";

export const Statistic = styled.section`
padding-top: 20px;
    margin-bottom: 40px;
        border: 1px solid #F5F5F5;
        border-radius: 5px;
        width: 500px;
        text-align: center;
`

export const StatisticTitle = styled.h2`
color: #696969;
    font-size: 40px;
    font-weight: bold;
    `

export const StatisticList = styled.ul`
display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 80px;
    background-color: #D3D3D3;
    border: 1px solid #A9A9A9;
`

export const StatisticItem = styled.li`
display: flex;
        justify-content: center;
        flex-direction: column;
        flex-grow: 1;
        height: 100%;

        :not(:last-child) {
    border-right: 1px solid #A9A9A9;
}
        
`

export const StatisticLabe = styled.span`
 font-size: 18px;`

export const StatisticPerc = styled.span`
font-size: 20px;
        font-weight: bold;`



