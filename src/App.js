import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Comp = () => {
  return <p>Hi, this is yunxinxu</p>
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" id='root'>

      <header className="App-header">
        <button
          onClick={() => setCount(count+1)}
        >Clicks: {count}</button>
        <Comp />
      </header>
    </div>
  );
}

export default App;
