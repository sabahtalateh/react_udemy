import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import RandomPlanet from './RandomPlanet'
import ItemList from './ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CharactersPage from './CharactersPage/CharactersPage'

import SwapiService from '../services/SwapiService'

import { SwapiServiceProvider } from './SwapiContext'
import CharacterDetails from './CharactersPage/CharacterDetails'

interface State {
    randomPlanet: boolean,
    selectedCharacterId: string | null,
}

export default class App extends React.Component<{}, State> {
    state = {
        randomPlanet: true,
        selectedCharacterId: null as null
    }

    private swapiService = new SwapiService()

    onCharacterSelected = (id: string) => {
        this.setState({ selectedCharacterId: id })
    }

    toggleRandomPlanet = () => {
        this.setState(state => {
            return { randomPlanet: !state.randomPlanet }
        })
    }

    render() {
        let randomPlanet = null
        if (this.state.randomPlanet) {
            randomPlanet = <RandomPlanet/>
        }

        return (
            <React.Fragment>
                <SwapiServiceProvider value={ this.swapiService }>
                    <Router>
                        <Header/>
                        {/*<Container>*/ }
                        {/*    <Button onClick={ this.toggleRandomPlanet }>Toggle random planet</Button>*/ }
                        {/*</Container>*/ }
                        {/*{ randomPlanet }*/ }
                        <Route path="/" render={ () => <h2>Welcom</h2> } exact/>
                        <Route path="/about" exact render={ () => <h2>About</h2> }/>
                        {/*<Route path="/people" exact component={ CharactersPage }/>*/}
                        <Route path="/people/:id?" render={ ({ match, location, history }) => {
                            const { id } = match.params
                            return <CharacterDetails selectedItemId={ id }/>
                        } }/>
                        {/*<CharactersPage/>*/ }
                        <Container>
                            <Row>
                                <Col lg={ 4 } md={ 6 } xs={ 12 }>
                                    <ItemList onItemSelected={ this.onCharacterSelected }
                                              loadData={ this.swapiService.getAllPlanets }/>
                                </Col>
                                <Col lg={ 8 } md={ 6 } xs={ 12 }>
                                    planets
                                </Col>
                            </Row>
                        </Container>
                    </Router>
                </SwapiServiceProvider>
            </React.Fragment>
        )
    }
}
