import Header from "../components/Header";
import "../components/css/Main.css"

// document.body.style = 'background: #e0f9fb;';

export default function NoPage() {
    return(
        <>
        <Header/>
        <section className="main">
        <h2 className="page-title">Error 404. Not Found</h2>
        </section>
        </>
    )
}