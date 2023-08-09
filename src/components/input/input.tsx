import React, { HTMLProps } from 'react';
import { styled } from 'styled-components';

interface InputProps extends HTMLProps<HTMLInputElement> {
    id: string;
    type: 'text' | 'password';
    dataTestId: 'email-input' | 'password-input';
    onChange?: (e: any) => void;
    value?: string;
    placeholder?: string;
}

const Input = ({ id, type, placeholder, dataTestId, ...restProps }: InputProps) => {
    return <StyledInput id={id} type={type} placeholder={placeholder} data-testid={dataTestId} {...restProps} />;
};

const StyledInput = styled.input``;

export default Input;
