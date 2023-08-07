import { styled, css } from 'styled-components';
import { useState } from 'react';

import Checkbox from '../../checkbox/checkbox';
import Button from '../../button/button';

const TodoItem = ({ id, todo, checked, text, onToggle, onEdit, onDelete }) => {
    const [status, setStatus] = useState(false);
    const [todoText, setTodoText] = useState(text);
    const [initTodoText, setInitTodoText] = useState(text);

    const handleChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleEdit = () => {
        setStatus(true);
        setInitTodoText(todoText);
    };

    const handleCancel = () => {
        setStatus(false);
        setTodoText(initTodoText);
    };

    const handleSubmit = () => {
        onEdit(todo, todoText);
        setStatus(false);
    };

    const renderViewMode = () => (
        <>
            <StyledSpan checked={checked}>{text}</StyledSpan>
            <Button data-testid="modify-button" onClick={handleEdit}>
                수정
            </Button>
            <Button
                data-testid="delete-button"
                onClick={() => {
                    onDelete(todo);
                }}
            >
                삭제
            </Button>
        </>
    );

    const renderEditMode = () => (
        <>
            <StyledInput id={id} type="text" data-testid="modify-input" onChange={handleChange} value={todoText} />
            <Button data-testid="submit-button" onClick={handleSubmit}>
                제출
            </Button>
            <Button data-testid="cancel-button" onClick={handleCancel}>
                취소
            </Button>
        </>
    );

    return (
        <StyledItem key={id}>
            <Checkbox
                defaultChecked={checked}
                onChange={() => {
                    onToggle(todo);
                }}
            />
            {status ? renderEditMode() : renderViewMode()}
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

const StyledInput = styled.input``;

export default TodoItem;
