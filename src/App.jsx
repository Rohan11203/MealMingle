
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recipes from "./pages/Recipes"
import RecipeInfo from "./components/RecipeInfo"
function App() {
  
  return (
    <>
    <Router>
    <Navbar />
    <div className="container main">
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="/recipes" element= { <Recipes /> } />
        <Route path="/:MealId" element={ <RecipeInfo /> }/>
      </Routes>
    </div>
    <Footer />
    </Router>
    </> 
  )
}

export default App
