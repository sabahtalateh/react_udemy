import * as React from 'react'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Header: React.FunctionComponent<{}> = () => {
    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

export default Header
