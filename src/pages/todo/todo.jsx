import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { access_token } from '../../utils/handleTodo/handleTodo';

import PageH2 from '../../components/pageH2/pageH2';
import TodoCreate from '../../components/todo/todoCreate/todoCreate';
import TodoList from '../../components/todo/todoList/todoList';

const Todo = () => {
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
