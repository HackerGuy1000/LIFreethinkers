import {React} from "react";
import "./css/Header.css"
export default function Header() {
    return (
        <section class="top-nav">
            <div>
                Logo Here
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li>Events</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </section>
    )
}