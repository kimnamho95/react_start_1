import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <p>The current count is: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </header>
    </div>
  );
}

export default App;