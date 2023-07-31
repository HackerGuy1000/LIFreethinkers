import React, { useState }  from "react";
import Header from "../components/Header";
import AboutText from "../components/AboutText"
import Faq from "../components/Faq";
import Branches from "../components/Branches";
import "../components/css/Main.css";




export default function About() {
    const [toggle, setIsToggled] = useState(1)
    React.useEffect(() => {
        const aboutLift = document.getElementById("aboutLift");
        const faq = document.getElementById("freq");
        const branches = document.getElementById("branches");
        const aboutSection= document.getElementById("aboutSection")
        aboutLift.style = "border-bottom: 1px solid #042861;"
        aboutLift.addEventListener("click", () => {
            faq.style = "border-bottom: 0px solid #042861;"
            branches.style = "border-bottom: 0px solid #042861;"
            aboutLift.style = "border-bottom: 1px solid #042861;"
            setIsToggled(1)

        })
        faq.addEventListener("click", () => {
            branches.style = "border-bottom: 0px solid #042861;"
            aboutLift.style = "border-bottom: 0px solid #042861;"
            faq.style = "border-bottom: 1px solid #042861;"
            setIsToggled(2)
           
        })
        branches.addEventListener("click", () => {
            faq.style = "border-bottom: 0px solid #042861;"
            aboutLift.style = "border-bottom: 0px solid #042861;"
            branches.style = "border-bottom: 1px solid #042861;"
            setIsToggled(3)
        })
      }, [])
      
    
    return (
        <>
            <Header/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossOrigin="anonymous"/>
                <div className="main">
                    {/* <h2>About Page</h2> */}
                    <div id="aboutTab">
                        <h3 className="tabText" id="aboutLift">About LIFT</h3>
                        <h3 className="tabText" id="freq">FAQ</h3>
                        <h3 className="tabText" id="branches">Branches</h3>
                    </div>
                    <div id="aboutSection">
                        {toggle == 1 && <AboutText/>}
                        {toggle == 2 && <Faq/>}
                        {toggle == 3 && <Branches/>}
                        
                    </div>
                </div>
        </>
    )
}