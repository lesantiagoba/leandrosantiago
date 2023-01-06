import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import BoardContainer from './Component/BoardContainer';

function App() {
  return (
  
    <BrowserRouter>
      <BoardContainer/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<AboutMe />} />
        <Route path="/:id" element={<Education />} />
        <Route path="/:id" element={<Experience />} />
        <Route path="/:id" element={<Portfolio />} />
        <Route path="/:id" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
