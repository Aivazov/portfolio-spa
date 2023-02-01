import { useState } from 'react';
import Main from './components/Main';
import Sidenav from './components/Sidenav';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
