import Header from "../components/Header";
import "../components/css/Main.css"
import logo from '../components/images/LIFT_No_Outline.webp'


// document.body.style = 'background: #e0f9fb;';

export default function Home() {
    return(
        <>
        <Header/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossOrigin="anonymous"/>
        <section className="home-page">
        <h1 className="page-title">Long Island Free Thinkers</h1>
        <div className="top-half" id="half">
            <img id="home-logo" src={logo} alt="LIFT Logo"/>
            <h1 id="homeText">Inspiring <span id="home-text-animated">Free Speech And Thought </span> Across Long Island</h1>
        </div>
        {/* <hr className="divider"/> */}
        <div className="bottom-half" id="half">
            <div className="wrapper">
            <h1 id="mission"><span className="fas fa-quote-left"/> Long Island Free Thinkers aims to provide a sanctuary of free thought, where politicial ideas and inquiries can be expressed with etiquette and professionality. We also wish to foster empathy and compassion through sharing ideas in a peaceful manner. <span className="fas fa-quote-right"/></h1>
            <p className="credit">-Andrew Abelman : LIFT cofounder</p>
            </div>

        </div>
        </section>
        </>
    )
}