import * as React from 'react'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'
import { TodoItem } from './models'

import { ListGroup } from 'react-bootstrap'

const StyledListGroup = styled(ListGroup)`
  margin-block-start: 6px;
`


const TodoList: React.FunctionComponent<{ todos: Array<TodoItem> }> = ({ todos }) => {
    return (
        <StyledListGroup>
            { todos.map(todo => {
                return <TodoListItem key={ todo.id } { ...todo }/>
            }) }
        </StyledListGroup>
    )
}

export default TodoList
