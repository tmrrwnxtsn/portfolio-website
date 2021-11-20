import React from 'react';
import {useState, useEffect} from 'react';
import Button from './Button';

interface CounterProps {
    start: number;
    step: number;
    onChange?: (val: number) => any;
}

const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(props.start);

    useEffect(() => {
            if (props.onChange) {
                props.onChange(count);
            }
        },
        [count])

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