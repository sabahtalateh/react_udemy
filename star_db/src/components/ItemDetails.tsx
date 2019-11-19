import * as React from 'react'
import { StyledError, StyledSpinner } from './Styles'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import SwapiService, { Character, DetailedItem } from '../services/SwapiService'
import styled from 'styled-components'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Jumbotron from 'react-bootstrap/Jumbotron'

const StyledJumbotron = styled(Jumbotron)`
  padding: 1rem;
`

const StyledHeader = styled.h2``

const RowNoMargin = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`

const StyledListGroupItem = styled(ListGroupItem)`
  border-color: #839496;
  border-bottom: none;
  border-left: none;
  border-right: none;
  :first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

const ItemTitle = styled.span`
  font-weight: bold;
  margin-right: 8px;
`

const ItemValue = styled.span`
  font-weight: normal;
  color: #B58900;
`

interface Props {
    itemId: string | null
}

interface State {
    details: Character | null
    loading: boolean
    error: boolean
}

interface RecordProps {
    details: DetailedItem
    field: string
    label: string
}

const Record: React.FunctionComponent<RecordProps> = (props: RecordProps) => {
    // @ts-ignore
    const value: any = props.details[props.field]

    return <StyledListGroupItem>
        <ItemTitle>{ props.label }:</ItemTitle>
        <ItemValue>{ value }</ItemValue>
    </StyledListGroupItem>

}

export default class ItemDetails extends React.Component<Props, State> {
    state = {
        loading: false,
        error: false,
        details: null as DetailedItem,
    }

    private swapiService = new SwapiService()

    componentDidMount() {
        this.updateCharacter()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateCharacter()
        }
    }

    private updateCharacter() {
        const { itemId } = this.props
        if (!itemId) {
            return
        }

        this.setState({ loading: true })

        this.swapiService.getCharacter(itemId)
            .then(details => {
                this.setState({ details, loading: false, error: false })
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
                <StyledSpinner animation="border"/>
            </Row>
        } else if (!this.state.details) {
            content = <Row>
                <StyledError>Select character..</StyledError>
            </Row>
        } else {
            content = (
                <RowNoMargin>
                    <ListGroup>
                        <StyledHeader>{ this.state.details.name }</StyledHeader>
                        <Record details={ this.state.details } field="name" label="Name"/>
                    </ListGroup>
                </RowNoMargin>
            )
        }

        return (<StyledJumbotron>{ content }</StyledJumbotron>)
    }
}
