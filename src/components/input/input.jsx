import { styled } from 'styled-components';

const Input = ({ type, ...restProps }) => {
    return <StyledInput type={type} {...restProps} />;
};

const StyledInput = styled.input``;

export default Input;
