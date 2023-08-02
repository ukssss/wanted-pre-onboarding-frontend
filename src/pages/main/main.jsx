import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    const onNavigate = () => {
        navigate('/signin');
    };
    useEffect(onNavigate, [navigate]);

    return (
        <>
            <div>Main</div>
        </>
    );
};

export default Main;
