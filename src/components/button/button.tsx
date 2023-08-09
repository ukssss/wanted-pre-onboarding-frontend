import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    dataTestId?:
        | 'signin-button'
        | 'signup-button'
        | 'modify-button'
        | 'delete-button'
        | 'submit-button'
        | 'cancel-button';
    disabled?: boolean;
    onClick?: () => void;
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
