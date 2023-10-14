import Home from './pages/Home'
import { Global, css } from '@emotion/react'


function App() {
  
  return(
    <div>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
    <Home></Home>
  </div>
  )
}

export default App;
