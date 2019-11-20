import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBound from './components/ErrorBound';

import { store } from './store';
import BookStoreService from './services/BookStoreService';
import { BookStoreProvider } from './hoc/withBookStoreService';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBound>
            <BookStoreProvider bookStoreService={bookStoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreProvider>
        </ErrorBound>
    </Provider>,
    document.getElementById('root'),
);
