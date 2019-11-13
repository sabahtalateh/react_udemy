import * as React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import { DeleteOutline } from 'styled-icons/material/DeleteOutline'
import { DoneOutline } from 'styled-icons/material/DoneOutline'
import { Exclamation } from 'styled-icons/fa-solid/Exclamation'

export enum Action {
    Done = 'done',
    Remove = 'remove',
    Important = 'important',
}

interface PropsStyled {
    theme: DefaultTheme,
    action: Action,
}

function getColor(props: PropsStyled): string {
    return props.theme.actionColors[props.action]
}

const Item = styled(ListGroupItem)<{ done: boolean, important: boolean }>`
  display:flex;
  padding: 10px;
  text-decoration: ${ props => props.done ? 'line-through' : 'none' };
  font-weight: ${ props => props.important ? 'bold' : 'normal' };
  color: ${ props => props.important ? props.theme.actionColors[Action.Important] : props.theme.colors.primary };
}`

const doneStyles = (props: PropsStyled) => {
    return css`
        background-color: ${ props.theme.actionColors[Action.Done] };
        border-color: ${ props.theme.actionColors[Action.Done] };
    `
}

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

export interface Props {
    id: string
    label: string
    important: boolean,
    done: boolean,
    show: boolean,
    onToddleDone: (id: string) => void,
    onToddleImportant: (id: string) => void,
    onDelete: (id: string) => void,
}

const TodoListItem: React.FunctionComponent<Props> = ({ id, label, done, important, onToddleDone, onToddleImportant, onDelete }) => {
    return (
        <Item done={ done ? 1 : 0 } important={ important ? 1 : 0 }>
            <LabelWrapper>{ label }</LabelWrapper>
            <StyledButton onClick={ () => onToddleDone(id) } action={ Action.Done }>
                <DoneOutline width="1.3rem" height="1.3rem"/>
            </StyledButton>
            <StyledButton onClick={ () => onDelete(id) } action={ Action.Remove }>
                <DeleteOutline width="1.3rem" height="1.3rem"/>
            </StyledButton>
            <StyledButton onClick={ () => onToddleImportant(id) } action={ Action.Important }>
                <Exclamation width="1.3rem" height="1.3rem"/>
            </StyledButton>
        </Item>
    )
}

export default TodoListItem
