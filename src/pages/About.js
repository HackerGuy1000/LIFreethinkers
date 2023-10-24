//Purpose: This is is the about page which displays some of the important information about LIFT

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../components/css/Main.css";




export default function About() {
    document.body.style = 'background: #ef2cb1;'; //Setting BG colour

    //This section is used for the scrolling animation so elements can animate in when visible
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });

        });

        const Elements = document.querySelectorAll('.hidden')
        Elements.forEach((el) => {
            observer.observe(el)
            console.log('observing`')
        });
    })
    
    
    return (
        <>
            <Header />

            {/* Importing fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Abel&family=Rubik:wght@300&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossOrigin="anonymous"/>
            
            <div className="about-wrapper">
                <div className="x">
                    <section className="curve-section about-page-title" id="pink">
                        <h1>What is LIFT?</h1>
                    </section>

                    <div className="spacer layer1"></div>

                    {/* Each of these "curve-section" is used to create the blobs shape, blue and pink indicating the top colour for blending */}
                    {/* The spacer and layer are used to create space between each section */}
                    <section className="curve-section" id="blue">
                        <h1 className="tenet-title hidden">Group Objective <span className="fas fa-bullseye"/></h1>
                        <p className="about-desc hidden">At LIFT, we strive to foster an environment where people from various backgrounds and worldviews can congregate and discuss their political beliefs in a safe and organized manner.</p>
                    </section >

                    <div className="spacer layer2"></div>

                    <section className="curve-section" id="pink">
                        <h1 className="tenet-title hidden">Our Reach <span className="fas fa-globe"/></h1>
                        <p className="about-desc hidden">Our organization aims to extend across numerous school districts on Long Island, enabling connectivity between previously isolated groups.</p>
                    </section >

                    <div className="spacer layer1"></div>

                    <section className="curve-section" id="blue">
                        <h1 className="tenet-title hidden">Unique Outlook <span className="fas fa-eye"/></h1>
                        <p className="about-desc hidden">Through our focus on free thought and the desire to revitalize interest in political/ethical topics for students, we have created a unique experience for all to explore vital ideas in our society.</p>
                    </section >

                    <div className="spacer layer2"></div>

                    <section className="curve-section" id="pink">
                        <h1 className="tenet-title hidden">Future Plans <span className="fas fa-clipboard-list"/></h1>
                        <p className="about-desc hidden">While small now, we wish to grow our community to the point where we can host massive conferences where our entire society can collaborate.</p>
                    </section>

                    <div className="spacer layer1"></div>

                    <section className="curve-section" id="blue">
                        <h1 className="tenet-title hidden">Importance In Society <span className="fas fa-book"/></h1>
                        <p className="about-desc hidden">No matter our size, we wish to aid our members by offering an environment where exploring politics is safe and intuitive. In a society where freedom of speech is fading silently, we wish to provide a space where ideas can grow freely.</p>
                    </section>

                    <div className="spacer layer2"></div>

                    <section className="curve-section" id="pink">
                        <h1 className="tenet-title hidden">How To Join <span className="fas fa-users"/></h1>
                        <p className="about-desc">
                            <ul>
                                <li className="hidden join-list">Follow our <a className="social" href="https://www.instagram.com/longislandfreethinkers" target="_blank">Instagram</a> for updates</li>
                                <li className="hidden join-list">Visit our <a className="social" href="https://discord.gg/ruwkwS429C" target="_blank">Discord Server</a> to chat and learn more</li>
                                <li className="hidden join-list">Email us at <a className="social" href="mailto:lifreethinkers@gmail.com" target="_blank">lifreethinkers@gmail.com</a> if your school is interested in collaborating</li>
                            </ul>
                        </p>
                    </section>
                </div>


            </div>
        </>
    )
}