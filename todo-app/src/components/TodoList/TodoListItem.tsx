import * as React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import { DeleteOutline } from 'styled-icons/material/DeleteOutline'
import { DoneOutline } from 'styled-icons/material/DoneOutline'

import { TodoItem } from './models'
import { Action } from './models'

function getColor(props: Props): string {
    return props.theme.actionColors[props.action]
}

interface Props {
    theme: DefaultTheme,
    action: Action,
}

const Item = styled(ListGroupItem)`
  display:flex;
  padding: 10px;
`

const StyledButton = styled(Button)<{ action: Action }>`
  align-self: center;
  background: #fff;
  border-color: ${ getColor };
  color: ${ getColor };
  margin-left: 4px;
  padding: 4px 8px;
  :hover {
    background: ${ getColor };
    border-color: ${ getColor };
  }
`

const LabelWrapper = styled.div`
  flex-grow: 1;
  align-self: center;
`

const TodoListItem: React.FunctionComponent<TodoItem> = ({ label }) => {
    return (<Item>
        <LabelWrapper>
            { label }
        </LabelWrapper>
        <StyledButton action={ Action.Done }>
            <DoneOutline width="1.3em" height="1.3em"/>
        </StyledButton>
        <StyledButton action={ Action.Remove }>
            <DeleteOutline width="1.3em" height="1.3em"/>
        </StyledButton>
    </Item>)
}

export default TodoListItem
