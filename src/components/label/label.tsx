import React, { HTMLProps } from 'react';
import { css, styled } from 'styled-components';

interface LabelProps extends HTMLProps<HTMLLabelElement> {
    id: string;
    sronly: boolean;
    children: React.ReactNode;
}

interface StyledLabelProps {
    sronly: boolean;
}

const Label = ({ id, sronly, children, ...restProps }: LabelProps) => {
    return (
        <StyledLabel htmlFor={id} sronly={sronly} {...restProps}>
            {children}
        </StyledLabel>
    );
};

const StyledLabel = styled.label<StyledLabelProps>`
    ${(props) =>
        props.sronly &&
        css`
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            clip-path: polygon(0 0, 0 0, 0 0);
            border: 0;
        `}
`;

export default Label;
