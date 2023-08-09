import React from 'react';
import { styled } from 'styled-components';

interface H2Props {
    children: React.ReactNode;
}

const H2 = ({ children, ...restProps }: H2Props) => {
    return <StyledH2 {...restProps}>{children}</StyledH2>;
};

const StyledH2 = styled.h2``;

export default H2;
