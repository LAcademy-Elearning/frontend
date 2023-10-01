import {BrowserRouter as Router} from "react-router-dom";
import PageRouter from "./Routes/Router";
function App() {
  return (
    <div className=" min-h-screen">
      <Router>
        <PageRouter/>
      </Router>
    </div>
  )
}

export default App
