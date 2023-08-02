import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PageH2 from '../../components/pageH2/pageH2';
import LoginForm from '../../components/login/loginForm/loginForm';
import LoginId from '../../components/login/loginId/loginId';
import LoginPw from '../../components/login/loginPw/loginPw';
import Button from '../../components/button/button';
import LoginValid from '../../components/login/loginValid/loginValid';

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
                <Button data-testid="signup-button" disabled={status}>
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
