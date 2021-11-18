import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string;
}

const Button = ({text, ...props}: ButtonProps) => {
    return (
        <button {...props}>{text}</button>
    );
};

export default Button;
