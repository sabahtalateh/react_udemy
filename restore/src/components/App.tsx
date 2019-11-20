import * as React from 'react';
import { withBookStoreService } from '../hoc/withBookStoreService';
import BookStoreService from '../services/BookStoreService';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const App: React.FunctionComponent<{ bookStoreService: BookStoreService }> = props => {
    return (
        <React.Fragment>
            <nav>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/cart">Cart</Link>
                </button>
            </nav>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact />
                <Route render={() => <h1>404</h1>} />
            </Switch>
        </React.Fragment>
    );
};

export default withBookStoreService(App);
