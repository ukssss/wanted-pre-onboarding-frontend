import { styled } from 'styled-components';

const Button = ({ type, disabled, children, ...restProps }) => {
    return (
        <StyledButton type={type} disabled={disabled} {...restProps}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button``;

export default Button;
