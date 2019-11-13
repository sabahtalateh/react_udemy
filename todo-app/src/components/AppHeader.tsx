import * as React from 'react'
import styled from 'styled-components'
import { ResolutionState } from './App'

const HeaderWrapper = styled.div`
  display:flex;
  margin-bottom: .5rem;
`

const StyledHeader = styled.h1`
  flex-grow: 1;
  margin-bottom: 0;
`

const StatWrapper = styled.div`
   align-self: flex-end;
   color: gray;
`

interface Props {
    todoCount: number,
    doneCount: number,
}

const AppHeader: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <HeaderWrapper>
            <StyledHeader>Todo List..</StyledHeader>
            <StatWrapper>
                {props.todoCount} more todo, {props.doneCount} done
            </StatWrapper>
        </HeaderWrapper>
    )
}

export default AppHeader
