import PropTypes from 'prop-types'; 
import {TransactionsTable, TransactionsName, TransactionsType} from './TransactionHistory.styled'


const TransactionHistory = ({ transactions }) => {
    return <TransactionsTable>
        <thead>
            <tr>
                <TransactionsName>Type</TransactionsName>
                <TransactionsName>Amount</TransactionsName>
                <TransactionsName>Currency</TransactionsName>
            </tr>
        </thead>

        {transactions.map(transaction => <tbody key={transaction.id}>
            <tr>
                <TransactionsType>{transaction.type}</TransactionsType>
                <TransactionsType>{transaction.amount}</TransactionsType>
                <TransactionsType>{transaction.currency}</TransactionsType>
            </tr>
        </tbody>)}
    </TransactionsTable>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;