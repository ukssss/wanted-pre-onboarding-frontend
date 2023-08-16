import axiosInstance from './axiosInstance';

class TodoService {
    async createTodo(todo, token) {
        try {
            if (!token) {
                throw new Error('Token does not exist');
            }
            const res = await axiosInstance.post(
                '/todos',
                { todo },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': `application/json`,
                    },
                }
            );

            return res.data;
        } catch (err) {
            throw err;
        }
    }

    async getTodos(token) {
        try {
            if (!token) {
                throw new Error('Token does not exist');
            }
            const res = await axiosInstance.get('/todos', { headers: { Authorization: `Bearer ${token}` } });
            if (!res.data || res.status === 204) return [];
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    async updateTodo(id, todo, isCompleted, token) {
        try {
            if (!token) {
                throw new Error('Token does not exist');
            }
            await axiosInstance.put(
                `/todos/${id}`,
                { todo, isCompleted },
                { headers: { Authorization: `Bearer ${token}` } }
            );
        } catch (err) {
            throw err;
        }
    }

    async deleteTodo(id, token) {
        try {
            if (!token) {
                throw new Error('Token does not exist');
            }
            await axiosInstance.delete(`/todos/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        } catch (err) {
            throw err;
        }
    }
}

const todoService = new TodoService();
export default todoService;
