import { action } from 'typesafe-actions'
import { BooksActions } from './actions'

import { Props as BookProps } from '../components/Book'
import { Dispatch } from 'react'
import BookStoreService from '../services/BookStoreService'

const booksLoaded = (books: BookProps[]) => action(BooksActions.LOADED, books)
const booksRequested = () => action(BooksActions.REQUESTED)
const booksError = () => action(BooksActions.ERROR)

export const fetchBooks = (dispatch: Dispatch<any>, bookStoreService: BookStoreService) => () => {
    dispatch(booksRequested())
    bookStoreService.getBooks()
        .then(books => {
            dispatch(booksLoaded(books))
        })
        .catch(err => dispatch(booksError()))
}
