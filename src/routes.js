import React,{Component} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import NewPub from "./pages/NewPub"
import NotFound from "./pages/NotFound"

class MainRoutes extends Component {
  render(){
    return(
      <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newpub" element={<NewPub/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
      </>
    )
  }
}

export default MainRoutes