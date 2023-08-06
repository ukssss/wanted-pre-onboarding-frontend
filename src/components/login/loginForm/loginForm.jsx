import { styled } from 'styled-components';

const LoginForm = ({ children, ...restProps }) => {
    return <StyledForm {...restProps}>{children}</StyledForm>;
};

const StyledForm = styled.form``;

export default LoginForm;
