import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router';
import { useState } from "react";

// Personal imports
import Home from "../components/Home";

import ServicesYard from "../components/ServicesYard";
import ServicesDog from "../components/ServicesDog";
import ServicesCar from "../components/ServicesCar";

import AboutUsOurMission from "../components/AboutUsOurMission";
import AboutUsOurTeam from "../components/AboutUsOurTeam";

import Careers from "../components/Careers";

import LearnMore from "../components/LearnMore";

import ContactUs from "../components/ContactUs";

import BookNow from "../components/BookNow";

import Account from "../components/Account";

export default function App() {
    let lang = localStorage.getItem("lang");
    if (lang === null) {
        lang = "EN";
    }

    const [language, setLanguage] = useState(lang);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />

                <Route path="/services/yardWork" element={<ServicesYard language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />
                <Route path="/services/carWashing" element={<ServicesCar language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />
                <Route path="/services/dogWalking" element={<ServicesDog language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />

                <Route path="/aboutUs/ourMission" element={<AboutUsOurMission language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />
                <Route path="/aboutUs/ourTeam" element={<AboutUsOurTeam language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />

                <Route path="/careers" element={<Careers language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />

                <Route path="/learnMore" element={<LearnMore language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />

                <Route path="/contactUs" element={<ContactUs language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />

                <Route path="/bookNow" element={<BookNow language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />

                <Route path="/account" element={<Account language={language} setLanguage={(language) => {localStorage.setItem("lang", language); setLanguage(language);}}/>} />
            </Routes>
        </BrowserRouter>
    )
}