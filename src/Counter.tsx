import React from 'react';
import {useState} from 'react';
import Button from './Button';

interface CounterProps {
    start: number;
    step: number;
}

const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(props.start);
    const handleIncrease = () => {
        setCount(count + props.step);
    };
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
            <Button text={'Прибавить ' + props.step} onClick={handleIncrease}/>
        </div>
    );
};

export default Counter;