import React from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
    return (
        <div className="App">
            <Counter start={0} step={1}/>
        </div>
    );
}

export default App;
