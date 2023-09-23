import Aboutme from "../components/Aboutme"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"
import Loader from "../components/Loader"
import Services from "../components/Services"
import Skills from "../components/Skills"
import Projects from './../components/Projects';

const Home = () => {
  return (
    <>
    <div className="md:w-[90%] sm:w-[100%] mx-auto">
    <HeaderMain/>
    <Aboutme/>
    <Skills/>
    <Services/>
    <Projects/>
    <ContactForm/>
    <Footer/>
    <Loader/>
    </div>
    
    </>
  )
}

export default Home