import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { access_token } from '../../utils/handleTodo/handleTodo';

import PageH2 from '../../components/heading/H2/H2';
import TodoCreate from '../../components/todo/todoCreate/todoCreate';
import TodoList from '../../components/todo/todoList/todoList';

interface TodoProps {}

const Todo = ({}: TodoProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        !access_token && navigate('/signin');
    }, [navigate]);

    return (
        <>
            <PageH2>TodoList</PageH2>
            <TodoCreate />
            <TodoList />
        </>
    );
};

export default Todo;
