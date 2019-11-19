import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Spinner from 'react-bootstrap/Spinner'

const StyledError = styled.div`
  width: 100%;
  text-align: center;
  color: #CB4B16;
`

const StyledJumbotron = styled(Jumbotron)`
  padding: 2rem;
`

const StyledSpinner = styled(Spinner)`
  margin: auto;
`

export { StyledError, StyledJumbotron, StyledSpinner }
