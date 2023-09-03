import Aboutme from "../components/Aboutme"
import Header from "../components/Header"
import Main from "../components/Main"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <>
    <div className="w-[80%] mx-auto">
    <Header/>
    <Main/>
    <Aboutme/>
    <Skills/>
    </div>
    
    </>
  )
}

export default Home