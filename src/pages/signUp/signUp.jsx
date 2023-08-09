import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { access_token } from '../../utils/handleTodo/handleTodo';

import PageH2 from '../../components/pageH2/pageH2';
import AuthForm from '../../components/authForm/authForm';

const SignUp = () => {
    const navigate = useNavigate();
    useEffect(() => {
        access_token && navigate('/todo');
    }, [navigate]);

    return (
        <>
            <PageH2>Sign Up</PageH2>
            <AuthForm />
        </>
    );
};

export default SignUp;
