import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import UpperLine from "../components/UpperLine"
import Menu from "../components/Menu"
import Main from "../components/Main"
import Valkommen from "../components/Valkommen"

function Home(){
    return(
        <div>
        <UpperLine/>
        <Header/>   
        <Menu/>
        <Valkommen/>
        <Main/>
        <Footer/>
        </div>
    )
}
export default Home

/*delete the valkommen component*/