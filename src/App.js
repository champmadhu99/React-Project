import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Pg from './Components/Pg/Pg'
import Titel from './Components/Title/Titel'
import About from "./Components/About/About";
import MenuItem from "./Components/MenuItem/MenuItem";
import MenuTitle from "./Components/MenuTitle/MenuTitle";
import Item from "./Components/Item/Item";
import Idea from "./Components/Idea/Idea";
import IdeaTitle from "./Components/IdeaTitle/IdeaTitle";
import Photo from "./Components/Photo/Photo";
import PhotoTitle from "./Components/PhotoTitle/PhotoTitle";
import Footer from "./Components/Footer/Footer";






const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>

      <div className='container'>
      <Titel/>
      <Pg/>
      
      </div>

      <About/>
      <div className='container'>
        <MenuTitle/>
       <MenuItem/>
      </div>
      <div>
        <MenuTitle/>
      <Item/>
      </div>

      <div>
        <IdeaTitle/>
      <Idea/>

      </div>
      <div>
        <PhotoTitle/>
        <Photo/>
      </div>

      <Footer/>
      
      
     
   

      
     
      
      
      
      
      
    </div>
  )
}

export default App

