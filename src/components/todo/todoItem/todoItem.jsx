import { styled, css } from 'styled-components';
import Checkbox from '../../checkbox/checkbox';

const TodoItem = ({ id, todo, checked, text, onToggle }) => {
    return (
        <StyledItem key={id}>
            <Checkbox
                defaultChecked={checked}
                onChange={() => {
                    onToggle(todo);
                }}
            />
            <StyledSpan checked={checked}>{text}</StyledSpan>
        </StyledItem>
    );
};

const StyledItem = styled.li``;
const StyledSpan = styled.span`
    ${(props) =>
        props.checked &&
        css`
            text-decoration: line-through;
        `}
`;

export default TodoItem;
