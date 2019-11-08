import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({theme}) => theme.fontFamily};
  }
`
export default GlobalStyles
