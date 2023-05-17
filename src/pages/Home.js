import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/css/Main.css"

document.body.style = 'background: #e0f9fb;';

export default function Home() {
    return(
        <>
        <Header/>
        <section className="main">
        <h1 id="title">Long Island Free Thinkers</h1>
        <Footer/>
        </section>
        </>
    )
}