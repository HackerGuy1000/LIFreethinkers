import React from "react";
import Header from "../components/Header";
import "../components/css/Main.css"


document.body.style = 'background: #e0f9fb;';


export default function About() {
    React.useEffect(() => {
        const aboutLift = document.getElementById("aboutLift");
        const faq = document.getElementById("freq");
        const chapters = document.getElementById("chapters");
        const aboutTitle = document.getElementById("aboutTitle")
        const aboutText = document.getElementById("aboutText")
        aboutLift.style = "border-bottom: 1px solid black;"
        aboutLift.addEventListener("click", () => {
            faq.style = "border-bottom: 0px solid black;"
            chapters.style = "border-bottom: 0px solid black;"
            aboutLift.style = "border-bottom: 1px solid black;"
            aboutTitle.innerHTML = "About LIFT"
            aboutText.innerHTML = "We are a bunch of people who have free thoughts and stuff I think"
        })
        faq.addEventListener("click", () => {
            chapters.style = "border-bottom: 0px solid black;"
            aboutLift.style = "border-bottom: 0px solid black;"
            faq.style = "border-bottom: 1px solid black;"
            aboutTitle.innerHTML = "FAQ"
            aboutText.innerHTML = "Why do we exist- Because we can, duh"
        })
        chapters.addEventListener("click", () => {
            faq.style = "border-bottom: 0px solid black;"
            aboutLift.style = "border-bottom: 0px solid black;"
            chapters.style = "border-bottom: 1px solid black;"
            aboutTitle.innerHTML = "Chapters"
            aboutText.innerHTML = "Our current chapters include: <br/> Syosset"
        })
      }, [])
      
    
    return (
        <>
            <Header />
            <section className="main">
                <h2>About Page</h2>
            </section>
            <div id="aboutTab">
                <h3 className="tabText" id="aboutLift">About LIFT</h3>
                <h3 className="tabText" id="freq">FAQ</h3>
                <h3 className="tabText" id="chapters">Chapters</h3>
            </div>
            <div className="aboutSection">
                <h3 id="aboutTitle">About LIFT</h3>
                <p id= "aboutText">We are a bunch of people who have free thoughts and stuff I think</p>
            </div>
                    
        </>
    )
}