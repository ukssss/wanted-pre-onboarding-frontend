import { styled } from 'styled-components';

const TodoList = ({ children }) => {
    return <StyledUl>{children}</StyledUl>;
};

const StyledUl = styled.ul``;

export default TodoList;
