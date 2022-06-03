import React from 'react';
const Balance = ({balance}) => {
    return (
        <div>{balance === 0 ? 'Just a zero '
        : balance < 0 ? 'Ur in a minus ' 
            : 'Ur in a plus '} {balance}</div>
        
    )
}

export default Balance