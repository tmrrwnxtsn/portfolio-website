import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
    const [stepCounter, setStepCounter] = useState(0)

    return (
        <div className="App">
            <Counter start={0} step={1} onChange={setStepCounter}/>
            <Counter start={0} step={stepCounter}/>
        </div>
    );
}

export default App;
