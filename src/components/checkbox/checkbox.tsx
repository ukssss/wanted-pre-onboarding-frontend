import React from 'react';
import { styled } from 'styled-components';

interface CheckboxProps {}

const Checkbox = ({ ...restProps }: CheckboxProps) => {
    return <StyledCheckbox type="checkbox" {...restProps} />;
};

const StyledCheckbox = styled.input``;

export default Checkbox;
