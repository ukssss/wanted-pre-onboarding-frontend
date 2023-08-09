import React from 'react';
import { styled } from 'styled-components';

interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ checked, ...restProps }: CheckboxProps) => {
    return <StyledCheckbox type="checkbox" defaultChecked={checked} {...restProps} />;
};

const StyledCheckbox = styled.input``;

export default Checkbox;
