import { combineReducers } from 'redux'
import { Props as BookProps } from '../components/Book'

import { BooksActions } from '../actions/actions'

interface BooksState {
    books: BookProps[]
    books_loading: boolean
    books_error: boolean
}

const booksInitialState: BooksState = {
    books: [],
    books_loading: true,
    books_error: false,
}

const booksReducer = (state: BooksState = booksInitialState, action: any) => {
    switch (action.type) {
        case BooksActions.REQUESTED:
            return {
                ...state,
                books: [],
                books_loading: true,
                books_error: false,
            }
        case BooksActions.LOADED:
            return {
                ...state,
                books: action.payload,
                books_loading: false,
                books_error: false,
            }
        case BooksActions.ERROR:
            return {
                ...state,
                books_loading: false,
                books_error: true,
            }
        default:
            return state
    }
}

// export const reducer = (state: State = initialState, action: any) => ({
//     booksReducer
// })

export const rootReducer = combineReducers({
    books: booksReducer
})

export type AppState = ReturnType<typeof rootReducer>
