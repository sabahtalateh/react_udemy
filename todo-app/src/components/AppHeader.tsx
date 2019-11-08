import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1<{ customColor: string }>`
  background-color: ${ ({ customColor }) => customColor };
  
`

const AppHeader: React.FunctionComponent<{}> = () => {
    return <StyledHeader customColor="cyan">Todo List..</StyledHeader>
}

export default AppHeader
