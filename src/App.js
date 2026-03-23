import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import Loader from "./Loader";
import NavBar from "./NavBar";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";


function App() {
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2500);
  },[]);
  return loading?(<Loader/>): (

     
   <Router>
    <div className="App">
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Contact" element={<Contact />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Gallery" element={<Gallery />}/>
    </Routes>
    <Footer />
    </div>
</Router>   
  );
}

export default App;
