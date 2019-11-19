import * as React from 'react'
import ItemDetails from '../ItemDetails'
import Col from 'react-bootstrap/Col'

interface Props {
    selectedItemId: string | null
}

const CharacterDetails: React.FunctionComponent<Props> = (props) => {
    return <Col lg={ 8 } md={ 6 } xs={ 12 }>
        <ItemDetails itemId={ props.selectedItemId }/>
    </Col>
}

export default CharacterDetails
