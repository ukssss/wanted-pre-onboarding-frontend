import { styled } from 'styled-components';
import Checkbox from '../../checkbox/checkbox';

const TodoItem = ({ children }) => {
    return (
        <StyledItem>
            <StyledLabel>
                <Checkbox />
                <StyledSpan>{children}</StyledSpan>
            </StyledLabel>
        </StyledItem>
    );
};

const StyledItem = styled.li``;
const StyledLabel = styled.label``;
const StyledSpan = styled.span``;

export default TodoItem;
