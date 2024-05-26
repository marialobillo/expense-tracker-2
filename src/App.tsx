import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import Expenses from "./pages/Expenses"



const App = () => {
  
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        
         <Expenses />
      </ThemeProvider>
    </>
  )
}

export default App
