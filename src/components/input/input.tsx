import React from 'react';
import { styled } from 'styled-components';

interface InputProps {
    id: string;
    type: 'text' | 'password';
    placeholder: string;
    dataTestId: 'email-input' | 'password-input';
}

const Input = ({ id, type, placeholder, dataTestId, ...restProps }: InputProps) => {
    return <StyledInput id={id} type={type} placeholder={placeholder} data-testid={dataTestId} {...restProps} />;
};

const StyledInput = styled.input``;

export default Input;
