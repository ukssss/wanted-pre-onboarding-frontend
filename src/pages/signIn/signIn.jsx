import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PageH2 from '../../components/pageH2/pageH2';
import LoginForm from '../../components/login/loginForm/loginForm';
import LoginId from '../../components/login/loginId/loginId';
import LoginPw from '../../components/login/loginPw/loginPw';
import LoginValid from '../../components/login/loginValid/loginValid';
import Button from '../../components/button/button';

const SignIn = () => {
    // signin
    const [login, setLogin] = useState({
        email: '',
        password: '',
        status: false,
        emailCheck: false,
        passwordCheck: false,
    });

    const onChangeEmail = (e) => {
        setLogin((prevState) => {
            return { ...prevState, email: e.target.value };
        });
    };

    const onChangePassword = (e) => {
        setLogin((prevState) => {
            return { ...prevState, password: e.target.value };
        });
    };

    const { email, password, status, emailCheck, passwordCheck } = login;

    // valid

    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 8;

    const onChangeStatus = () => {
        if (isEmailValid && isPasswordValid) {
            setLogin((prevState) => {
                return { ...prevState, status: false };
            });
        } else {
            setLogin((prevState) => {
                return { ...prevState, status: true };
            });
        }
    };

    const onCheckEmail = () => {
        if (!isEmailValid && email.length > 0) {
            setLogin((prevState) => {
                return { ...prevState, emailCheck: true };
            });
        } else {
            setLogin((prevState) => {
                return { ...prevState, emailCheck: false };
            });
        }
    };
    const onCheckPassword = () => {
        if (!isPasswordValid && password.length > 0) {
            setLogin((prevState) => {
                return { ...prevState, passwordCheck: true };
            });
        } else {
            setLogin((prevState) => {
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
        navigate('/signup');
    };

    return (
        <>
            <PageH2>SignIn</PageH2>
            <LoginForm>
                <LoginId id="loginId" onChange={onChangeEmail}>
                    ID
                </LoginId>
                <LoginPw id="loginPw" onChange={onChangePassword}>
                    PW
                </LoginPw>
                <Button data-testid="signin-button" disabled={status}>
                    로그인
                </Button>
                <Button onClick={onNavigate} disabled={false}>
                    회원가입
                </Button>
            </LoginForm>
            {emailCheck ? <LoginValid>이메일 오류</LoginValid> : ''}
            {passwordCheck ? <LoginValid>패스워드 오류</LoginValid> : ''}
        </>
    );
};

export default SignIn;
