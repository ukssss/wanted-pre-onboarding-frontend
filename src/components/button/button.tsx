import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    disabled: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button = ({ type, disabled, onClick, children }: ButtonProps) => {
    return (
        <StyledButton type={type} disabled={disabled} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button``;

export default Button;
