import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Todo = () => {
    // navigate
    const navigate = useNavigate();

    // token
    const isLoggedIn = localStorage.getItem('token');
    const onCheckLoggedIn = () => {
        !isLoggedIn && navigate('/signin');
    };

    useEffect(onCheckLoggedIn, [isLoggedIn, navigate]);

    return <div>Todo</div>;
};

export default Todo;
