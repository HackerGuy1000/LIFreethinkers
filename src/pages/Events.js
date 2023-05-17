import Header from "../components/Header";
import Footer from "../components/Footer";
import Event from "../components/Event";
import Meeting1 from "../components/images/meeting.jpeg"
import "../components/css/Main.css"


document.body.style = 'background: #e0f9fb;';

export default function Events() {
    return(
        <>
        <Header/>
        <section className="main">
        <h2>Events</h2>
        </section>
        <Event image={Meeting1} title="First Introductory Event" text="For our first event we are gonna bruh you know"/>
        <Footer/>
        </>
    )
}