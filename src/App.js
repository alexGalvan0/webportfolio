import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/index/HomePage';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
//$ git add .
//$ git commit -am "make it better"
//$ git push heroku master

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
              <Route exact path="/" element={[<HomePage/>,<About/>]} />
              <Route className="contact-app-page" exact path="/contact" element={< Contact />} />
              <Route exact path="/projects" element={[< Projects />]} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
