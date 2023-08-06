import { styled, css } from 'styled-components';

import Checkbox from '../../checkbox/checkbox';
import Button from '../../button/button';

const TodoItem = ({ id, todo, checked, text, onToggle, onDelete }) => {
    return (
        <StyledItem key={id}>
            <StyledLabel>
                <Checkbox
                    defaultChecked={checked}
                    onChange={() => {
                        onToggle(todo);
                    }}
                />
                <StyledSpan checked={checked}>{text}</StyledSpan>
            </StyledLabel>
            <Button data-testid="modify-button">수정</Button>
            <Button data-testid="delete-button">삭제</Button>
        </StyledItem>
    );
};

const StyledItem = styled.li``;
const StyledLabel = styled.label``;
const StyledSpan = styled.span`
    ${(props) =>
        props.checked &&
        css`
            text-decoration: line-through;
        `}
`;

export default TodoItem;
