import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/css/Main.css"

document.body.style = 'background: #e0f9fb;';

export default function Contact() {
    return(
        <>
        <Header/>
        <section className="main">
        <h2>Contact</h2>
        <Footer/>
        </section>
        </>
    )
}