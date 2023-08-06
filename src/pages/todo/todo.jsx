import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TodoTemplate from '../../components/todo/todoTemplate/todoTemplate';
import TodoList from '../../components/todo/todoList/todoList';
import TodoItem from '../../components/todo/todoItem/todoItem';
import TodoCreate from '../../components/todo/todoCreate/todoCreate';

import { DEV_ADDRESS } from '../../api/api';
import axios from 'axios';

const Todo = () => {
    const navigate = useNavigate();

    const access_token = localStorage.getItem('token');
    const onCheckLoggedIn = () => {
        !access_token && navigate('/signin');
    };

    useEffect(onCheckLoggedIn);

    const [todos, setTodos] = useState([]);

    const url = DEV_ADDRESS;
    const api = axios.create({
        baseURL: url,
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': `application/json`,
        },
    });

    const getTodos = async (todo) => {
        try {
            const res = await api.get('/todos');
            setTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        access_token && getTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access_token]);

    const createTodo = async (todo) => {
        try {
            const res = await api.post('/todos', todo);
            getTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <TodoTemplate>
            <TodoCreate createTodo={createTodo} />
            <TodoList>
                {todos.map((el) => {
                    return <TodoItem key={el.id}>{el.todo}</TodoItem>;
                })}
            </TodoList>
        </TodoTemplate>
    );
};

export default Todo;
