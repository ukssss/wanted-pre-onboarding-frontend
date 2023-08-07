import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TodoTemplate from '../../components/todo/todoTemplate/todoTemplate';
import TodoList from '../../components/todo/todoList/todoList';
import TodoItem from '../../components/todo/todoItem/todoItem';
import TodoCreate from '../../components/todo/todoCreate/todoCreate';

import { DEV_ADDRESS } from '../../api/api';
import axios from 'axios';
import PageH2 from '../../components/pageH2/pageH2';

const Todo = () => {
    const navigate = useNavigate();

    const access_token = localStorage.getItem('token');
    const onCheckLoggedIn = () => {
        !access_token && navigate('/signin');
    };

    useEffect(onCheckLoggedIn);

    const url = DEV_ADDRESS;
    const api = axios.create({
        baseURL: url,
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': `application/json`,
        },
    });

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        access_token && getTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access_token]);

    const getTodos = async (todo) => {
        try {
            const res = await api.get('/todos');
            setTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const createTodo = async (todo) => {
        try {
            const res = await api.post('/todos', todo);
            getTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onToggle = async (todo) => {
        try {
            const res = await api.put(`/todos/${todo.id}`, {
                todo: todo.todo,
                isCompleted: !todo.isCompleted,
            });
            getTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onEdit = async (todo, edit) => {
        try {
            const res = await api.put(`/todos/${todo.id}`, {
                todo: edit,
                isCompleted: todo.isCompleted,
            });
            getTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onDelete = async (todo) => {
        try {
            const res = await api.delete(`/todos/${todo.id}`);
            getTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <TodoTemplate>
            <PageH2>TodoList</PageH2>
            <TodoCreate createTodo={createTodo} />
            <TodoList>
                {todos.length > 0 ? (
                    todos.map((todo) => {
                        return (
                            <TodoItem
                                todo={todo}
                                key={todo.id}
                                text={todo.todo}
                                checked={todo.isCompleted}
                                onToggle={onToggle}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        );
                    })
                ) : (
                    <div>"Nothing,,,</div>
                )}
            </TodoList>
        </TodoTemplate>
    );
};

export default Todo;
