import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact" 
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Module from "./components/module/Module"
import Crossword from "./components/games/crosswordgame"
import Scenarios from "./components/games/Scenerios"
import Quizpage from "./components/module/Quizpage"
import Login from "./Login"
import Video from "./components/module/video"
import Leaders from "./components/leaderboard/Leaders"
import GainRewards from './components/GainRewards'
import Chatbo from "./Chatbo"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/module" element={<Module />} />
          <Route path="/crossword" element={<Crossword />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/quizpage" element={<Quizpage />} />
          <Route path="/leaderboard" element={<Leaders />} />
          <Route path="/video" element={<Video />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gainrewards" element={<GainRewards />} />
          <Route path="/chatbo" element={<Chatbo />} />
        </Routes>
        <Chatbo/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
