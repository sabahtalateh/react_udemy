import BookStoreService from './services/BookStoreService'

export const getBookStoreService: () => BookStoreService = () => {
    return new BookStoreService()
}
