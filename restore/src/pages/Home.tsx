import * as React from 'react';
import BookList from '../components/BookList';

export default class Home extends React.Component<{}, {}> {
    render() {
        return <BookList books={[]} />;
    }
}
