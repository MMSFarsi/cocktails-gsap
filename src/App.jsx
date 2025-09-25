import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <main >
      <Navbar></Navbar>
      <Hero/>
    </main>
  )
}

export default App