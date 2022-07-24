import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 14px;
    border-collapse: collapse;
    text-align: center;
    width: 800px;
    margin-bottom: 40px;`

export const TransactionsName = styled.th`
background: #AFCDE7;
    color: white;
    padding: 10px 20px;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;

    :first-of-type {
    text-align: left;
}
    `

export const TransactionsType = styled.td`
border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
     background: #D8E6F3;

:first-of-type {
    background: #AFCDE7;
    color: white;
    padding: 10px 20px;
     text-align: left;
}
`


