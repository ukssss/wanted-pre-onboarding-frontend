import React from 'react';
import { styled, css } from 'styled-components';
import { useState } from 'react';

import { onToggle, onEdit, onDelete } from '../../../hooks/useTodo/useTodo';

import Label from '../../label/label';
import Checkbox from '../../checkbox/checkbox';
import Button from '../../button/button';

interface TodoItemProps {
    id: string;
    todo: any[];
    checked: boolean;
    text: string;
}

const TodoItem = ({ id, todo, checked, text }: TodoItemProps) => {
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
            <Button type="button" dataTestId="modify-button" onClick={handleEdit}>
                수정
            </Button>
            <Button
                type="button"
                dataTestId="delete-button"
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
            <Label id={`edit-${id}`} sronly={true}>
                Edit Todo
            </Label>
            <StyledInput
                id={`edit-${id}`}
                type="text"
                data-testid="modify-input"
                onChange={handleChange}
                value={todoText}
            />
            <Button type="submit" dataTestId="submit-button" onClick={handleSubmit}>
                제출
            </Button>
            <Button type="reset" dataTestId="cancel-button" onClick={handleCancel}>
                취소
            </Button>
        </>
    );

    return (
        <StyledItem>
            <Checkbox
                checked={checked}
                onChange={() => {
                    onToggle(todo);
                }}
            />
            {status ? renderEditMode() : renderViewMode()}
        </StyledItem>
    );
};

interface StyledSpanProps {
    checked: boolean;
}

const StyledItem = styled.li``;
const StyledSpan = styled.span<StyledSpanProps>`
    ${(props) =>
        props.checked &&
        css`
            text-decoration: line-through;
        `}
`;

const StyledInput = styled.input``;

export default TodoItem;
