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

        <tbody>{transactions.map(({id, type, amount, currency}) => <tr key={id}>
                <TransactionsType>{type}</TransactionsType>
                <TransactionsType>{amount}</TransactionsType>
                <TransactionsType>{currency}</TransactionsType>
        </tr>)}
        </tbody>
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