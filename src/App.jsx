import { useState } from 'react';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume';
import Sidenav from './components/Sidenav';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Sidenav />
      <Main />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
