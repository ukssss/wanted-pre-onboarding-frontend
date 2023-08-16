import { useState } from 'react';
import { css, styled } from 'styled-components';

import Input from '../input/input';
import Label from '../label/label';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';

const TodoItem = ({ id, todo, isCompleted, onUpdate, onDelete }) => {
    const [isChecked, setIsChecked] = useState(isCompleted);
    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState(todo);
    const [initTodoText, setInitTodoText] = useState(todo);

    const handleChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleCheckBox = () => {
        setIsChecked((prev) => !prev);
        onUpdate(id, todoText, !isChecked);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setInitTodoText(todoText);
    };
    const handleCancel = () => {
        setIsEditing(false);
        setTodoText(initTodoText);
    };
    const handleUpdate = () => {
        onUpdate(id, todoText, isChecked);
        setIsEditing(false);
    };
    const handleDelete = () => {
        onDelete(id);
    };

    const viewLayout = () => (
        <>
            <Span id={id} checked={isCompleted}>
                {todo}
            </Span>
            <Button type="button" data-testid="modify-button" onClick={handleEdit}>
                수정
            </Button>
            <Button type="button" data-testid="delete-button" onClick={handleDelete}>
                삭제
            </Button>
        </>
    );

    const editLayout = () => (
        <>
            <Label>Edit Mode</Label>
            <Input type="text" id={id} data-testid="modify-input" value={todoText} onChange={handleChange} />
            <Button type="button" data-testid="submit-button" onClick={handleUpdate}>
                확인
            </Button>
            <Button type="button" data-testid="cancel-button" onClick={handleCancel}>
                취소
            </Button>
        </>
    );

    return (
        <Li>
            <Checkbox checked={isCompleted} onChange={handleCheckBox} />
            {isEditing ? editLayout() : viewLayout()}
        </Li>
    );
};

const Li = styled.li``;
const Span = styled.span`
    ${(props) =>
        props.checked &&
        css`
            text-decoration: line-through;
        `}
`;

export default TodoItem;
