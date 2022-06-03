import React from 'react';
import { Wrapper } from './styles';
import PropTypes from 'prop-types'

const Transaction = ({transaction: {value, label}}) => {
    return (<Wrapper value={value}>
        Label: {label}
        <p>Value: {value}</p>
        <br/>
    </Wrapper>)
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: 0
    }
}

export default Transaction