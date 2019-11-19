import * as React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import SwapiService, { Planet } from '../services/SwapiService'
import { StyledError, StyledJumbotron, StyledSpinner } from './Styles'


const StyledHeader = styled.h2``

const StyledPlanetInfoWrapper = styled.div`
  margin-left: 16px;
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

const PlanetImg = styled.img`
  width: 100%;
  border-radius: 6px;
`

const ItemTitle = styled.span`
  font-weight: bold;
  margin-right: 8px;
`

const ItemValue = styled.span`
  font-weight: normal;
  color: #B58900;
`

interface State {
    planet: Planet,
    loading: boolean,
    error: boolean,
}

export default class RandomPlanet extends React.Component<{}, State> {
    private swapiService: SwapiService
    private interval: number | null = null
    private mounted = false

    state = {
        planet: {
            id: '',
            name: '',
            population: '',
            orbitalPeriod: '',
            diameter: '',
            image: '',
        },
        loading: true,
        error: false,
    }

    constructor(props: Readonly<{}>) {
        super(props)
        this.swapiService = new SwapiService()
    }

    componentDidMount(): void {
        this.mounted = true
        this.interval = setInterval(this.updatePlanet, 10000)
        this.updatePlanet()
    }

    componentWillUnmount(): void {
        this.mounted = false
        clearInterval(this.interval)
    }

    updatePlanet = () => {
        this.setState({ loading: true })

        const id = Math.floor(Math.random() * 25) + 2
        // const id = 100000000

        this.swapiService.getPlanet(id.toString())
            .then(planet => {
                if (this.mounted) {
                    this.setState({ planet, loading: false })
                }
            })
            .catch(err => this.setState({ error: true, loading: false }))
    }

    render() {
        let { planet: { name, population, orbitalPeriod, diameter, image }, loading, error } = this.state
        let content
        if (error) {
            content = <Row>
                <StyledError>Something went wrong..</StyledError>
            </Row>
        } else if (loading) {
            content = <Row>
                <StyledSpinner animation="border"/>
            </Row>
        } else {
            content = <Row>
                <Col xs={ 12 } md={ 4 }>
                    <PlanetImg src={ image } alt=""/>
                </Col>
                <Col xs={ 12 } md={ 8 }>
                    <StyledPlanetInfoWrapper>
                        <StyledHeader>{ name }</StyledHeader>
                        <ListGroup>
                            <StyledListGroupItem>
                                <ItemTitle>Population:</ItemTitle>
                                <ItemValue>{ population }</ItemValue>
                            </StyledListGroupItem>
                            <StyledListGroupItem>
                                <ItemTitle>Rotation Period:</ItemTitle>
                                <ItemValue>{ orbitalPeriod }</ItemValue>
                            </StyledListGroupItem>
                            <StyledListGroupItem>
                                <ItemTitle>Diameter:</ItemTitle>
                                <ItemValue>{ diameter }</ItemValue>
                            </StyledListGroupItem>
                        </ListGroup>
                    </StyledPlanetInfoWrapper>
                </Col>
            </Row>
        }

        return (
            <Container>
                <StyledJumbotron>{ content }</StyledJumbotron>
            </Container>
        )
    }
}
