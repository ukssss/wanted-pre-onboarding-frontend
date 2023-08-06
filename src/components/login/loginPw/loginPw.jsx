import { styled } from 'styled-components';

const LoginPw = ({ id, children, ...restProps }) => {
    return (
        <StyledLabel htmlFor={id}>
            {children}
            <StyledInput type="password" id={id} data-testid="password-input" {...restProps} />
        </StyledLabel>
    );
};

const StyledLabel = styled.label``;
const StyledInput = styled.input``;

export default LoginPw;
