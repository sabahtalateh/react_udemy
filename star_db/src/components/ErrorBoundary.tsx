import * as React from 'react'
import { StyledError } from './Styles'

interface State {
    hasError: boolean
    errorMsg: string
}

export class ErrorBoundary extends React.Component<{}, State> {
    state = {
        hasError: false,
        errorMsg: ''
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            hasError: true,
            errorMsg: error.message
        })
    }

    render() {
        const { hasError } = this.state

        if (hasError) {
            return <StyledError>Error - { this.state.errorMsg } ..</StyledError>
        }

        return this.props.children
    }
}
