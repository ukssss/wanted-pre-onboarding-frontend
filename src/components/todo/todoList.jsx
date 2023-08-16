import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useAuth } from '../../context/authContext';
import todoService from '../../api/todoService';

import TodoItem from '../todo/todoItem';
import TodoForm from '../todo/todoForm';
import Label from '../label/label';
import Input from '../input/input';
import Button from '../button/button';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');
    const { token } = useAuth();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                if (!token) return;
                const fetchedTodos = await todoService.getTodos(token);
                setTodos(fetchedTodos);
            } catch (err) {
                throw err;
            }
        };

        fetchTodos();
    }, [token]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!value) return;
            const res = await todoService.createTodo(value, token);
            setTodos((prev) => [...prev, res]);
            setValue('');
        } catch (err) {
            throw err;
        }
    };

    const handleUpdate = async (id, newTodo, newIsCompleted) => {
        const currentTodo = todos.find((todo) => todo.id === id);

        try {
            if (!currentTodo || (currentTodo.todo === newTodo && currentTodo.isCompleted === newIsCompleted)) return;
            await todoService.updateTodo(id, newTodo, newIsCompleted, token);
            setTodos((prev) =>
                prev.map((item) => (item.id === id ? { ...item, todo: newTodo, isCompleted: newIsCompleted } : item))
            );
        } catch (err) {
            throw err;
        }
    };

    const handleDelete = async (id) => {
        try {
            await todoService.deleteTodo(id, token);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        } catch (err) {
            throw err;
        }
    };

    return (
        <Div>
            <TodoForm onSubmit={handleSubmit}>
                <Label id="todo"></Label>
                <Input id="todo" type="text" onChange={handleChange} value={value} data-testid="new-todo-input" />
                <Button type="submit" dataTestId="new-todo-add-button">
                    추가
                </Button>
            </TodoForm>

            <Ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        todo={todo.todo}
                        isCompleted={todo.isCompleted}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </Ul>
        </Div>
    );
};

const Div = styled.div``;
const Ul = styled.ul``;

export default TodoList;
