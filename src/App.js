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
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={AboutMe} />
        <Route path="/:id" component={Education} />
        <Route path="/:id" component={Experience} />
        <Route path="/:id" component={Portfolio} />
        <Route path="/:id" component={Skills} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
