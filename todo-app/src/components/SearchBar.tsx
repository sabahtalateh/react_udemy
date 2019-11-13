import * as React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { ResolutionFilter } from './ResolutionFilter'
import { ResolutionState } from './App'

const BarWrapper = styled.div`
  display:flex;
`

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid rgba(0,0,0,0.2);
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 1;
  margin-right: 10px;
`

interface Props {
    queryUpdated: (query: string) => void
    resolutionStateChanged: (state: ResolutionState) => void
    resolutionState: ResolutionState,
}

interface State {
    query: string
}

export default class SearchBar extends React.Component<Props, State> {
    state = {
        query: ''
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        this.setState({ query: query })
        this.props.queryUpdated(query)
    }

    render() {
        const searchText = 'search...!#!&@^..'

        return (
            <BarWrapper>
                <Input type="text" placeholder={ searchText } value={ this.state.query } onChange={ this.onChange }/>
                <ResolutionFilter resolutionStateChanged={ this.props.resolutionStateChanged }
                                  resolutionState={ this.props.resolutionState }
                />
            </BarWrapper>
        )
    }
}
