import { styled } from 'styled-components';

const LoginValid = ({ children }) => {
    return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
    color: red;
`;

export default LoginValid;
