import { handleTodo } from '../../utils/handleTodo/handleTodo';

export const getTodos = async (setTodos) => {
    try {
        const res = await handleTodo.get('/todos');
        setTodos(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const createTodo = async (todo) => {
    try {
        const res = await handleTodo.get('/todos', todo);
        getTodos(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const onToggle = async (todo) => {
    try {
        const res = await handleTodo.put(`/todos/${todo.id}`, {
            todo: todo.todo,
            isCompleted: !todo.isCompleted,
        });
        getTodos(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const onEdit = async (todo, text) => {
    try {
        const res = await handleTodo.put(`/todos/${todo.id}`, {
            todo: text,
            isCompleted: todo.isCompleted,
        });
        getTodos(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const onDelete = async (todo) => {
    try {
        const res = await handleTodo.delete(`/todos/${todo.id}`);
        getTodos(res.data);
    } catch (err) {
        console.log(err);
    }
};
