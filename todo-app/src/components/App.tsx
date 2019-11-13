import { Action, Props as TodoItem } from './TodoList/TodoListItem'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { FontFamily } from '../theme/theme'
import * as React from 'react'
import { Container } from 'react-bootstrap'
import GlobalStyles from '../theme/GlobalStyles'
import AppHeader from './AppHeader'
import SearchBar from './SearchBar'
import TodoList from './TodoList/TodoList'
import AddItem from './AddItem'
import uuid = require('uuid')

export enum ResolutionState {
    All,
    Ready,
    InProgress
}

interface State {
    todos: Array<TodoItem>,
    query: string,
    resolutionState: ResolutionState,
    theme: DefaultTheme,
}

export class App extends React.Component<{}, State> {
    removeItem = (id: string) => {
        this.setState(({ todos, ...state }: State) => {
            const idx = todos.findIndex((el) => el.id === id)
            return { todos: [...todos.slice(0, idx), ...todos.slice(idx + 1)], ...state }
        })
    }

    toggleDone = (id: string) => {
        this.setState(({ todos, ...state }) => {
            const idx = todos.findIndex((el) => el.id === id)
            const oldTodo = todos[idx]
            const newTodo = { ...oldTodo, done: !oldTodo.done }
            return { ...state, todos: [...todos.slice(0, idx), newTodo, ...todos.slice(idx + 1)] }
        })
    }

    toggleImportant = (id: string) => {
        this.setState(({ todos, ...state }) => {
            const idx = todos.findIndex((el) => el.id === id)
            const oldTodo = todos[idx]
            const newTodo = { ...oldTodo, important: !oldTodo.important }
            return { ...state, todos: [...todos.slice(0, idx), newTodo, ...todos.slice(idx + 1)] }
        })
    }

    addItem = (text: string) => {
        this.setState(({ todos, ...state }) => {
            return { todos: [...todos, this.createTodoItem(text)], ...state }
        })
    }

    createTodoItem = (text: string): TodoItem => {
        return {
            id: uuid.v4(),
            label: text,
            done: false,
            important: false,
            show: true,
            onDelete: this.removeItem,
            onToddleDone: this.toggleDone,
            onToddleImportant: this.toggleImportant,
        }
    }

    queryUpdated = (query: string) => {
        this.setState({ query })
    }

    resolutionStateChanged = (state: ResolutionState) => {
        this.setState({ resolutionState: state })
    }

    state = {
        todos: [
            this.createTodoItem('Почесать жопу'),
            this.createTodoItem('Выучиться скакать на жирафиках'),
            this.createTodoItem('Выучить реакт'),
        ],
        query: '',
        resolutionState: ResolutionState.All,
        theme: {
            fontFamily: FontFamily.SANS_SERIF,
            actionColors: {
                [Action.Done]: '#28a745',
                [Action.Remove]: '#dc3545',
                [Action.Important]: '#17a2b8',
            },
            colors: {
                primary: '#000'
            }
        }
    }

    private getTodos() {
        let todos = this.byQuery(this.state.todos)
        todos = this.byResolution(todos)
        return todos
    }

    private byQuery(todos: Array<TodoItem>) {
        if (this.state.query !== '') {
            const words = this.state.query.trim().split(';').map(w => w.trim().toLowerCase())
            todos = this.state.todos.filter((todo) => {
                let contains = false
                for (let i = 0; i < words.length; i++) {
                    if ('' === words[i]) {
                        continue
                    }
                    if (todo.label.toLowerCase().includes(words[i])) {
                        contains = true
                        break
                    }
                }
                return contains
            })
        }
        return todos
    }

    private byResolution(todos: Array<TodoItem>) {
        if (this.state.resolutionState === ResolutionState.Ready) {
            todos = todos.filter(t => t.done)
        }

        if (this.state.resolutionState === ResolutionState.InProgress) {
            todos = todos.filter(t => !t.done)
        }
        return todos
    }

    render() {
        let todoCount = 0
        let doneCount = 0

        this.state.todos.forEach(t => {
            if (!t.done) todoCount++
            else doneCount++
        })

        return (
            <ThemeProvider theme={ this.state.theme }>
                <React.Fragment>
                    <Container>
                        <GlobalStyles/>
                        <AppHeader todoCount={ todoCount } doneCount={ doneCount }/>
                        <SearchBar queryUpdated={ this.queryUpdated }
                                   resolutionStateChanged={ this.resolutionStateChanged }
                                   resolutionState={ this.state.resolutionState }

                        />
                        <TodoList todos={ this.getTodos() }/>
                        <AddItem addItem={ this.addItem }/>
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}
