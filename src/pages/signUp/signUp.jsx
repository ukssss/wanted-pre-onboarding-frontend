import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { DEV_ADDRESS } from '../../api/api';
import axios from 'axios';

import PageH2 from '../../components/pageH2/pageH2';
import LoginForm from '../../components/login/loginForm/loginForm';
import LoginId from '../../components/login/loginId/loginId';
import LoginPw from '../../components/login/loginPw/loginPw';
import LoginValid from '../../components/login/loginValid/loginValid';
import Button from '../../components/button/button';

const SignUp = () => {
    // signup
    const [account, setAccount] = useState({
        email: '',
        password: '',
        status: false,
        emailCheck: false,
        passwordCheck: false,
    });

    const onChangeEmail = (e) => {
        setAccount((prevState) => {
            return { ...prevState, email: e.target.value };
        });
    };

    const onChangePassword = (e) => {
        setAccount((prevState) => {
            return { ...prevState, password: e.target.value };
        });
    };

    const { email, password, status, emailCheck, passwordCheck } = account;

    // valid

    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 8;

    const onChangeStatus = () => {
        if (isEmailValid && isPasswordValid) {
            setAccount((prevState) => {
                return { ...prevState, status: false };
            });
        } else {
            setAccount((prevState) => {
                return { ...prevState, status: true };
            });
        }
    };

    const onCheckEmail = () => {
        if (!isEmailValid && email.length > 0) {
            setAccount((prevState) => {
                return { ...prevState, emailCheck: true };
            });
        } else {
            setAccount((prevState) => {
                return { ...prevState, emailCheck: false };
            });
        }
    };
    const onCheckPassword = () => {
        if (!isPasswordValid && password.length > 0) {
            setAccount((prevState) => {
                return { ...prevState, passwordCheck: true };
            });
        } else {
            setAccount((prevState) => {
                return { ...prevState, passwordCheck: false };
            });
        }
    };

    useEffect(onChangeStatus, [isEmailValid, isPasswordValid]);
    useEffect(onCheckEmail, [email.length, isEmailValid]);
    useEffect(onCheckPassword, [password.length, isPasswordValid]);

    // navigate
    const navigate = useNavigate();
    const onNavigate = () => {
        navigate('/signin');
    };

    // axios
    const url = DEV_ADDRESS;
    const api = axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const onSubmit = () => {
        api.post('/auth/signup', {
            email,
            password,
        })
            .then((res) => {
                alert('You have successfully registered as a member !');
                navigate('/signin');
            })
            .catch((err) => {
                alert('This is an existing account !');
            });
    };

    return (
        <>
            <PageH2>SignUp</PageH2>
            <LoginForm>
                <LoginId id="loginId" onChange={onChangeEmail}>
                    ID
                </LoginId>
                <LoginPw id="loginPw" onChange={onChangePassword}>
                    PW
                </LoginPw>
                <Button data-testid="signup-button" disabled={status} onClick={onSubmit}>
                    제출
                </Button>
                <Button onClick={onNavigate} disabled={false}>
                    돌아가기
                </Button>
            </LoginForm>
            {emailCheck ? <LoginValid>이메일 오류</LoginValid> : ''}
            {passwordCheck ? <LoginValid>패스워드 오류</LoginValid> : ''}
        </>
    );
};

export default SignUp;
