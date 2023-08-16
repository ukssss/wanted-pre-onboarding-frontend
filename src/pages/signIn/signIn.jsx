import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import PageH2 from '../../components/pageH2/pageH2';
import AuthForm from '../../components/authForm/authForm';

const SignIn = () => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        token && navigate('/todo');
    }, [navigate, token]);

    return (
        <>
            <PageH2>Sign In</PageH2>
            <AuthForm usage="signin" />
        </>
    );
};

export default SignIn;
