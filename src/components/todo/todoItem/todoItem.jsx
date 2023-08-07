import { styled, css } from 'styled-components';
import { useState } from 'react';

import Checkbox from '../../checkbox/checkbox';
import Button from '../../button/button';

const TodoItem = ({ id, todo, checked, text, onToggle, onEdit, onDelete }) => {
    const [status, setStatus] = useState(false);
    const [edit, setEdit] = useState(text);

    const renderViewMode = () => (
        <>
            <StyledSpan checked={checked}>{text}</StyledSpan>
            <Button
                data-testid="modify-button"
                onClick={() => {
                    setStatus(true);
                }}
            >
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
            <StyledLabel htmlFor={id}>
                <StyledInput
                    id={id}
                    type="text"
                    data-testid="modify-input"
                    onChange={(e) => {
                        setEdit(e.target.value);
                    }}
                />
            </StyledLabel>
            <Button
                data-testid="submit-button"
                onClick={() => {
                    onEdit(todo, edit);
                    setStatus(false);
                }}
            >
                제출
            </Button>
            <Button
                data-testid="cancel-button"
                onClick={() => {
                    setStatus(false);
                }}
            >
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
const StyledLabel = styled.label``;
const StyledSpan = styled.span`
    ${(props) =>
        props.checked &&
        css`
            text-decoration: line-through;
        `}
`;

const StyledInput = styled.input``;

export default TodoItem;
