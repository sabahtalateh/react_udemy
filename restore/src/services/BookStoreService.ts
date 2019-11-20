import { Props as BookProps } from '../components/Book'

const books = [
    {
        id: '1',
        title: 'Hello',
        author: 'Marina'
    },
    {
        id: '2',
        title: 'Hello',
        author: 'Marina'
    },
    {
        id: '3',
        title: 'Hello',
        author: 'Marina'
    }
]

export default class BookStoreService {
    getBooks: () => Promise<BookProps[]> = () => {
        return new Promise<BookProps[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(books)
                // reject()
            }, 1500)
        })
    }
}
