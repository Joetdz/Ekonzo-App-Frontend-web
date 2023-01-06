import "./App.scss"

import { BrowserRouter } from "react-router-dom"
import PublicRouter from "./Pages/Public/PublicRouter"

function App() {
  return (
    <BrowserRouter>
      <PublicRouter />
    </BrowserRouter>
  )
}

export default App
