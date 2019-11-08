import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Container } from 'react-bootstrap'

import GlobalStyles from './theme/GlobalStyles'
import { FontFamily } from './theme/Theme'

import AppHeader from './components/AppHeader'
import SearchBar from './components/SearchBar'
import TodoList from './components/TodoList/TodoList'
import { Action, TodoItem } from './components/TodoList/models'


const App = () => {
    const todos: Array<TodoItem> = [
        { id: '1', label: 'Почесать жопу', important: true },
        { id: '2', label: 'Выучиться скакать на жирафиках', important: true },
        { id: '3', label: 'Выучить реакт', important: false },
    ]

    const theme: DefaultTheme = {
        fontFamily: FontFamily.SANS_SERIF,
        actionColors: {
            [Action.Done]: 'lightgreen',
            [Action.Remove]: 'tomato',
        },
    }

    return (
        <div>
            <ThemeProvider theme={ theme }>
                <React.Fragment>
                    <Container>
                        <GlobalStyles/>
                        <AppHeader/>
                        <SearchBar/>
                        <TodoList todos={ todos }/>
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
