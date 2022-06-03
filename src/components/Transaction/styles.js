import styled from 'styled-components'

export const Wrapper = styled.div`
background: ${({value}) => value < 0 ? '#e2e1e1' : "yellow"};
border: 1px solid rgb(0, 0, 0);
border-radius: 3px;
padding: 5px;
margin-bottom: 10px;
`

Wrapper.displayName = 'TransactionWrapper'