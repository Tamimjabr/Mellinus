import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import UpperLine from "../components/UpperLine"
import Menu from "../components/Menu"
import Valkommen from "../components/Valkommen"
import Main from "../components/Main"

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