import { styled } from 'styled-components';

const Button = ({ type, dataTestId, disabled, onClick, children }) => {
    return (
        <StyledButton type={type} data-testid={dataTestId} disabled={disabled} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button``;

export default Button;
