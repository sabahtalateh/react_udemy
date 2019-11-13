import * as React from 'react'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'
import { Props as TodoItem } from './TodoListItem'

import { ListGroup } from 'react-bootstrap'

const StyledListGroup = styled(ListGroup)`
  margin-block-start: 6px;
`


interface Props {
    todos: Array<TodoItem>,
}

const TodoList: React.FunctionComponent<Props> = ({ todos }) => {
    return (
        <StyledListGroup>
            { todos.map(todo => {
                return <TodoListItem key={ todo.id } { ...todo } onDelete={ todo.onDelete }/>
            }) }
        </StyledListGroup>
    )
}

export default TodoList
