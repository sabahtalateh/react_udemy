import * as React from 'react'
import SwapiService from '../../services/SwapiService'
import Col from 'react-bootstrap/Col'
import ItemList from '../ItemList'


type Props = {
    swapiService: SwapiService
    onItemSelected: (id: string) => void
}

const CharactersList: React.FunctionComponent<Props> = (props) => {
    return (<Col lg={ 4 } md={ 6 } xs={ 12 }>
        <ItemList onItemSelected={ props.onItemSelected }
                  loadData={ props.swapiService.getAllCharacters }/>
    </Col>)
}

export default CharactersList
