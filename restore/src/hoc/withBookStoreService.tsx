import * as React from 'react';
import BookStoreService from '../services/BookStoreService';
import { Context } from 'react';
import { getBookStoreService } from '../dependencies';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface ContextProps {
    bookStoreService: BookStoreService;
}

const BookStoreContext: Context<ContextProps> = React.createContext({ bookStoreService: null });

export const withBookStoreService = <P extends object>(
    Component: React.ComponentType<P>,
): React.FC<Omit<P, keyof ContextProps>> => props => {
    return <Component {...(props as P)} bookStoreService={getBookStoreService()} />;
};

export const BookStoreProvider: React.FC<ContextProps> = ({ bookStoreService, children }) => (
    <BookStoreContext.Provider value={{ bookStoreService }}>{children}</BookStoreContext.Provider>
);
