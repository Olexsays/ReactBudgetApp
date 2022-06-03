import React from 'react';
import Transaction from '../Transaction'
import PropTypes from 'prop-types'

const Transactions = ({ transactions = []}) => {
    return (
        <div>
            {
            transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)
            }
        </div>
    )
}

Transactions.propTypes = {
    transactions: PropTypes.array
}


export default Transactions