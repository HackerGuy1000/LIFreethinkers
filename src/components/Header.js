import {React} from "react";
import "./css/Header.css"
import logo from './images/LIFT.png'

export default function Header() {
    return (
        <section className="top-nav">
            <div id="logo">
                <a className="nostyle" href="/home"><img src={logo} width={40} height={40}/> <h1 className="title">LIFT</h1> </a>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a className="nostyle" href="/merch">Support Us</a></li>
                {/* <li><a className="nostyle" href="/contact">Contact</a></li> */}
                <li><a className="nostyle" href="/about">About Us</a></li>
            </ul>
        </section>
    )
}