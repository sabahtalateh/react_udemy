import * as React from 'react';
import ErrorIndicator from './ErrorIndicator';

interface State {
    hasError: boolean;
}

export default class ErrorBound extends React.Component<{}, State> {
    state = {
        hasError: false,
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return this.props.children;
    }
}
