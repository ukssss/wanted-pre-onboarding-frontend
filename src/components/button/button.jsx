import { styled } from 'styled-components';

const Button = ({ disabled, children, ...restProps }) => {
    return (
        <StyledButton type="button" disabled={disabled} {...restProps}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button``;

export default Button;
