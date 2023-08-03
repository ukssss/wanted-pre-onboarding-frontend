import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import TodoTemplate from '../../components/todo/todoTemplate/todoTemplate';
import TodoList from '../../components/todo/todoList/todoList';
import TodoItem from '../../components/todo/todoItem/todoItem';

const Todo = () => {
    // navigate
    const navigate = useNavigate();

    // token
    const isLoggedIn = localStorage.getItem('token');
    const onCheckLoggedIn = () => {
        !isLoggedIn && navigate('/signin');
    };

    useEffect(onCheckLoggedIn, [isLoggedIn, navigate]);

    return (
        <TodoTemplate>
            <TodoList>
                <TodoItem>테스트1</TodoItem>
                <TodoItem>테스트2</TodoItem>
                <TodoItem>테스트3</TodoItem>
            </TodoList>
        </TodoTemplate>
    );
};

export default Todo;
