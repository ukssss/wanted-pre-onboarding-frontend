import { styled } from 'styled-components';

const TodoTemplate = ({ children }) => {
    return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div``;

export default TodoTemplate;
