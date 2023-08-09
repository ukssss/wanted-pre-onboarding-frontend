import { styled } from 'styled-components';
import { useState } from 'react';
import { createTodo } from '../../../hooks/useTodo/useTodo';

import Button from '../../button/button';

const TodoCreate = () => {
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        const todoData = {
            todo: value,
        };

        createTodo(todoData);
        setValue('');
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledInput data-testid="new-todo-input" onChange={onChange} value={value} />
            <Button data-testid="new-todo-add-button" onClick={onSubmit}>
                추가
            </Button>
        </StyledForm>
    );
};

const StyledForm = styled.form``;
const StyledInput = styled.input``;

export default TodoCreate;
