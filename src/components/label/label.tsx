import React from 'react';
import { styled } from 'styled-components';

interface LabelProps {
    id: string;
    children: React.ReactNode;
}

const Label = ({ id, children, ...restProps }: LabelProps) => {
    return (
        <StyledLabel htmlFor={id} {...restProps}>
            {children}
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    border: 0;
`;

export default Label;
