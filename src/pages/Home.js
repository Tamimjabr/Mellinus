import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import UpperLine from "../components/UpperLine"
import Menu from "../components/Menu"
import Main from "../components/Main"
import Welcome from "../components/Welcome"

function Home(){
    return(
        <div>
        <UpperLine/>
        <Header/>   
        <Menu/>
        <Welcome/>
        <Main/>
        <Footer/>
        </div>
    )
}
export default Home

/*delete the Welcome component*/