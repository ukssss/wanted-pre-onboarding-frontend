import { styled } from 'styled-components';

const LoginId = ({ id, children, ...restProps }) => {
    return (
        <StyledLabel htmlFor={id}>
            {children}
            <StyledInput type="text" id={id} data-testid="email-input" {...restProps} />
        </StyledLabel>
    );
};

const StyledLabel = styled.label``;
const StyledInput = styled.input``;

export default LoginId;
