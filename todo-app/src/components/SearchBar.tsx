import * as React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const BarWrapper = styled.div`
  display:flex;
`

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid rgba(0,0,0,0.2);
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 1;
  margin-right: 10px;
`

const StyledButton = styled(Button)<{ active?: boolean }>`
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    color: black;
`

const SearchBar: React.FunctionComponent<{}> = () => {
    const searchText = 'search...!#!&@^..'

    return (
        <BarWrapper>
            <Input type="text" placeholder={ searchText }/>
            <StyledButton active={true}>All</StyledButton>
            <StyledButton>Ready</StyledButton>
            <StyledButton>In Progress</StyledButton>
        </BarWrapper>
    )
}

export default SearchBar
