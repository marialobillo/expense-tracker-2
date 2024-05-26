import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"



const App = () => {
  
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        Hello
      </ThemeProvider>
    </>
  )
}

export default App
