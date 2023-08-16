import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import PageH2 from '../../components/pageH2/pageH2';
import AuthForm from '../../components/authForm/authForm';

const SignUp = () => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        token && navigate('/todo');
    }, [navigate, token]);

    return (
        <>
            <PageH2>Sign Up</PageH2>
            <AuthForm usage="signup" />
        </>
    );
};

export default SignUp;
