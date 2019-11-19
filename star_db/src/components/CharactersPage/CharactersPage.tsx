import * as React from 'react'
import Row from 'react-bootstrap/Row'
import { ErrorBoundary } from '../ErrorBoundary'
import Col from 'react-bootstrap/Col'
import ItemDetails from '../ItemDetails'
import Container from 'react-bootstrap/Container'
import SwapiService from '../../services/SwapiService'
import withSwapiService from '../../hoc/WithSwapiService'
import CharactersList from './CharactersList'
import CharacterDetails from './CharacterDetails'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface RouterProps {
    id: string
}

type Props = RouteComponentProps<RouterProps> & {
    swapiService: SwapiService
}

interface State {
    selectedItemId: string | null
}

class CharactersPage extends React.Component<Props, State> {
    state = {
        selectedItemId: null as null
    }

    onItemSelected = (id: string) => {
        this.setState({ selectedItemId: id })
    }

    render() {
        const { selectedItemId } = this.state

        return (
            <Container>
                <Row>
                    <ErrorBoundary>
                        <CharactersList swapiService={ this.props.swapiService }
                                        onItemSelected={ (itemId) => {
                                            this.props.history.push(`/people/${itemId}`)
                                        } }/>
                        {/*<CharacterDetails selectedItemId={ selectedItemId }/>*/ }
                    </ErrorBoundary>
                </Row>
            </Container>
        )
    }
}

export default withSwapiService(withRouter(CharactersPage))
