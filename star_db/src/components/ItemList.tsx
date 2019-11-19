import * as React from 'react'
import styled from 'styled-components'

import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Item } from '../services/SwapiService'
import { StyledError, StyledSpinner } from './Styles'

const StyledJumbotron = styled(Jumbotron)`
  padding: 0;
`

const StyledListGroupItem = styled(ListGroupItem)`
  border-color: #839496;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`

const PaddedStyledSpinner = styled(StyledSpinner)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

interface Props {
    onItemSelected: (id: string) => void
    loadData: () => Promise<Item[]>
}

interface State {
    items: Item[]
    loading: boolean
    error: boolean
}

export default class ItemList extends React.Component<Props, State> {
    state = {
        items: [] as Item[],
        loading: true,
        error: false,
    }

    componentDidMount(): void {
        const { loadData } = this.props

        loadData().then((items: Item[]) => {
            this.setState({ items, loading: false, error: false })
        })
    }

    render() {
        const { error, loading } = this.state
        let content
        if (error) {
            content = <Row>
                <StyledError>Something went wrong..</StyledError>
            </Row>
        } else if (loading) {
            content = <Row>
                <PaddedStyledSpinner animation="border"/>
            </Row>
        } else {
            content = (<ListGroup>
                { this.state.items.map(item => {
                    return (
                        <StyledListGroupItem key={ item.id } onClick={ () => this.props.onItemSelected(item.id) }>
                            { item.name }
                        </StyledListGroupItem>
                    )
                }) }
            </ListGroup>)
        }

        return (<StyledJumbotron>{ content }</StyledJumbotron>)
    }
}


const f = (component: React.Component) => {
    return class extends React.Component<Props, State> {
        state = {
            items: [] as Item[],
            loading: true,
            error: false,
        }

        componentDidMount(): void {
            const { loadData } = this.props

            loadData().then((items: Item[]) => {
                this.setState({ items, loading: false, error: false })
            })
        }

        render() {
            const { error, loading } = this.state
            let content
            if (error) {
                content = <Row>
                    <StyledError>Something went wrong..</StyledError>
                </Row>
            } else if (loading) {
                content = <Row>
                    <PaddedStyledSpinner animation="border"/>
                </Row>
            } else {
                content = component
            }

            return (<StyledJumbotron>{ content }</StyledJumbotron>)
        }
    }
}

export { f }
