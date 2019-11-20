import * as React from 'react'
import { connect } from 'react-redux'

import Book, { Props as BookProps } from './Book'
import { AppState } from '../reducers'
import { withBookStoreService } from '../hoc/withBookStoreService'
import BookStoreService from '../services/BookStoreService'
import { fetchBooks } from '../actions/action_creators'
import Loader from './Loader'
import ErrorIndicator from './ErrorIndicator'
import { Dispatch } from 'react'
import { bindActionCreators } from 'redux'

interface Props extends StateProps, DispatchProps {
    bookStoreService: BookStoreService;
}

interface StateProps {
    books: BookProps[];
    loading: boolean;
    error: boolean;
}

interface DispatchProps {
    // booksLoaded?: typeof booksLoaded
    // booksRequested?: typeof booksRequested
    // booksError?: typeof booksError
    fetchBooks: () => void;
}

interface OwnProps {
    bookStoreService: BookStoreService;
}

const BookList: React.FunctionComponent<{
    books: BookProps[];
}> = props => {
    const { books } = props
    return (
        <ul>
            { books.map(book => {
                return (
                    <li key={ book.id }>
                        <Book key={ book.id } { ...book } />
                    </li>
                )
            }) }
        </ul>
    )
}

class BookListContainer extends React.Component<Props, {}> {
    componentDidMount(): void {
        // const { bookStoreService, booksLoaded, booksRequested, booksError } = this.props
        // booksRequested()
        // bookStoreService.getBooks()
        //     .then(books => {
        //         booksLoaded(books)
        //     })
        //     .catch(err => booksError())
        const { fetchBooks } = this.props
        console.log(this.props)
        fetchBooks()
    }

    render() {
        const { books, loading, error } = this.props

        if (loading) {
            return <Loader/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={ books }/>
    }
}

const mapStateToProps = ({ books: { books, books_loading, books_error } }: AppState): StateProps => ({
    books,
    loading: books_loading,
    error: books_error,
})

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps => {
    const { bookStoreService } = ownProps
    return {
        fetchBooks: fetchBooks(dispatch, bookStoreService),
    }
    // dispatch(booksRequested())
    // booksLoaded: (books: BookProps[]) => dispatch(booksLoaded(books))
    // ...bindActionCreators({
    //     booksLoaded, booksRequested,
    //     booksError
    // }, dispatch)
}

// export default BookList

export default withBookStoreService(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(BookListContainer))
