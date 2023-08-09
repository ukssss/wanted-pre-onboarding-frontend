import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { access_token } from '../../utils/handleTodo/handleTodo';

import PageH2 from '../../components/pageH2/pageH2';
import AuthForm from '../../components/authForm/authForm';

const SignIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        access_token && navigate('/todo');
    }, [navigate]);

    return (
        <>
            <PageH2>Sign In</PageH2>
            <AuthForm usage="signin" />
        </>
    );
};

export default SignIn;
