import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { access_token } from '../../utils/handleTodo/handleTodo';

import PageH2 from '../../components/heading/H2/H2';
import AuthForm from '../../components/authForm/authForm';

interface SignUpProps {}

const SignUp = ({}: SignUpProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        access_token && navigate('/todo');
    }, [navigate]);

    return (
        <>
            <PageH2>Sign Up</PageH2>
            <AuthForm usage="signup" />
        </>
    );
};

export default SignUp;
