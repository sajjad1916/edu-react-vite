import React from 'react';
import Hero from '../components/ui/Hero';
import "../assets/styles/hero.css";
import "../assets/styles/about.css";
import "../assets/styles/courses.css";
import "../assets/styles/achievement.css";
import "../assets/styles/newsletter.css";
import "../assets/styles/client.css";
import "../assets/styles/footer.css";
import About from '../components/ui/About';
import Courses from '../components/ui/Courses';
import Achievements from '../components/ui/Achievement';
import Newsletter from '../components/ui/Newsletter';
import Client from '../components/ui/Client';
import Footer from '../components/ui/Footer';


function Home() {
  return (
    <>
          <Hero />
          <About />
          <Courses />
          <Achievements />
          <Newsletter />
          <Client />
          <Footer />
    </>
  )
}

export default Home
