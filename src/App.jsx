import { useState } from 'react';
import Sidenav from './components/Sidenav';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Sidenav />
    </div>
  );
}

export default App;
