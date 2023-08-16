import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useEffect } from 'react';

import PageH2 from '../../components/pageH2/pageH2';
import TodoList from '../../components/todo/todoList';

const Todo = () => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        !token && navigate('/signin');
    }, [navigate, token]);

    return (
        <>
            <PageH2>TodoList</PageH2>
            <TodoList />
        </>
    );
};

export default Todo;
