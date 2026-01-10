import Navbar from "./components/pages/Navbar"
import Hero from "./components/pages/Hero"
import OurRecipes from "./components/pages/OurRecipes"
import RecipeCard from "./components/pages/RecipeCard"
import { Toaster } from 'react-hot-toast';

<Toaster position="top-right" />


function App() {
   

  

  return (
    <>
      
       <Navbar></Navbar>
       <Hero></Hero>
       <OurRecipes></OurRecipes>
       <RecipeCard></RecipeCard>
       
       
       

    </>
  )
}

export default App
