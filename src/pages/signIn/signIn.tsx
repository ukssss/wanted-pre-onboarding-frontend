import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { access_token } from '../../utils/handleTodo/handleTodo';

import PageH2 from '../../components/heading/H2/H2';
import AuthForm from '../../components/authForm/authForm';

interface SignInProps {}

const SignIn = ({}: SignInProps) => {
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
