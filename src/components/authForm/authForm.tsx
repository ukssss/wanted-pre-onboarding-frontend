import React from 'react';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../utils/auth/auth';

import Input from '../input/input';
import Label from '../label/label';
import Button from '../button/button';

interface AuthFormProps {
    usage: 'signin' | 'signup';
}

interface StyledDivProps {
    direction?: string;
}

const AuthForm = ({ usage, ...restProps }: AuthFormProps) => {
    const navigate = useNavigate();
    const onNavigateSignUp = () => {
        navigate('/signup');
    };
    const onNavigateSignIn = () => {
        navigate('/signin');
    };

    const [state, setState] = useState({
        email: '',
        password: '',
        emailCheck: false,
        passwordCheck: false,
        status: false,
    });

    const { email, password, emailCheck, passwordCheck } = state;

    const onChangeEmail = (e) => {
        setState((prev) => {
            return { ...prev, email: e.target.value };
        });
    };

    const onChangePw = (e) => {
        setState((prev) => {
            return { ...prev, password: e.target.value };
        });
    };

    useEffect(() => {
        if (email.length > 0 && !email.includes('@')) {
            setState((prev) => {
                return { ...prev, emailCheck: true };
            });
        } else {
            setState((prev) => {
                return { ...prev, emailCheck: false };
            });
        }
    }, [email]);

    useEffect(() => {
        if (password.length > 0 && password.length < 8) {
            setState((prev) => {
                return { ...prev, passwordCheck: true };
            });
        } else {
            setState((prev) => {
                return { ...prev, passwordCheck: false };
            });
        }
    }, [password]);

    const onSignIn = () => {
        auth.post('/auth/signin', {
            email,
            password,
        })
            .then((res) => {
                localStorage.setItem('token', res.data.access_token);
                navigate('/todo');
            })
            .catch((err) => {
                alert('This account does not exist');
                setState((prev) => {
                    return { ...prev, email: '', password: '' };
                });
            });
    };

    const onSignUp = () => {
        auth.post('/auth/signup', {
            email,
            password,
        })
            .then((res) => {
                alert('You have successfully registered as a member !');
                navigate('/signin');
            })
            .catch((err) => {
                alert('This is an existing account !');
                setState((prev) => {
                    return { ...prev, email: '', password: '' };
                });
            });
    };

    return (
        <StyledForm onSubmit={usage === 'signin' ? onSignIn : onSignUp} {...restProps}>
            <StyledDiv direction="column">
                <Label id="id" sronly={false}>
                    ID
                </Label>
                <Input dataTestId="email-input" id="id" type="text" onChange={onChangeEmail} value={email} />
                {emailCheck && <StyledInfo>이메일 양식에 어긋납니다</StyledInfo>}
                <Label id="pw" sronly={false}>
                    PW
                </Label>
                <Input dataTestId="password-input" id="pw" type="password" onChange={onChangePw} value={password} />
                {passwordCheck && <StyledInfo>올바르지 않은 비밀번호 양식입니다</StyledInfo>}
            </StyledDiv>
            <StyledDiv>
                {usage === 'signin' ? (
                    <>
                        <Button type="button" dataTestId="signin-button" onClick={onSignIn}>
                            로그인
                        </Button>
                        <Button type="button" onClick={onNavigateSignUp}>
                            회원가입
                        </Button>
                    </>
                ) : (
                    <>
                        <Button type="button" dataTestId="signup-button" onClick={onSignUp}>
                            제출
                        </Button>
                        <Button type="button" onClick={onNavigateSignIn}>
                            돌아가기
                        </Button>
                    </>
                )}
            </StyledDiv>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const StyledDiv = styled.div<StyledDivProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
`;

const StyledInfo = styled.div`
    color: red;
`;

export default AuthForm;
