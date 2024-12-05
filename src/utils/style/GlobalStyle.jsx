import { createGlobalStyle } from 'styled-components'
// import { useTheme } from '../hooks'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`
// Ce qui nous permet de récupérer le thème :
function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle