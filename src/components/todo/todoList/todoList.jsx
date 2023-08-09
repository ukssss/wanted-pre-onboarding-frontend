import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { access_token } from '../../../utils/handleTodo/handleTodo';
import { getTodos } from '../../../hooks/useTodo/useTodo';
import TodoItem from '../todoItem/todoItem';

const TodoList = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        access_token && getTodos(setTodos);
    }, [todos]);

    return (
        <StyledUl>
            {todos.length > 0 ? (
                todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} text={todo.todo} checked={todo.isCompleted} />;
                })
            ) : (
                <div>"Nothing,,,"</div>
            )}
        </StyledUl>
    );
};

const StyledUl = styled.ul``;

export default TodoList;
