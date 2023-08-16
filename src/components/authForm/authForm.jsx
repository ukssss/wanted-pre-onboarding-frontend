import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import authService from '../../api/authService';
import { useAuth } from '../../context/authContext';

import Input from '../input/input';
import Label from '../label/label';
import Button from '../button/button';

const AuthForm = ({ usage, ...restProps }) => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
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

    const { email, password, emailCheck, passwordCheck, status } = state;

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

    useEffect(() => {
        if (email.length > 0 && password.length > 0 && !emailCheck && !passwordCheck) {
            setState((prev) => {
                return { ...prev, status: false };
            });
        } else {
            setState((prev) => {
                return { ...prev, status: true };
            });
        }
    }, [email.length, password.length, emailCheck, passwordCheck]);

    const onSignIn = async (e) => {
        e.preventDefault();

        try {
            if (!email || !password) return;
            const token = await authService.signIn({ email, password });
            localStorage.setItem('token', token);
            setToken(token);
            navigate('/todo');
        } catch (err) {
            alert('This account does not exist');
            setState((prev) => {
                return { ...prev, email: '', password: '' };
            });
        }
    };

    const onSignUp = async (e) => {
        e.preventDefault();

        try {
            if (!email || !password) return;
            await authService.signUp({ email, password });
            alert('You have successfully registered as a member !');
            navigate('/signin');
        } catch (err) {
            alert('This is an existing account !');
            setState((prev) => {
                return { ...prev, email: '', password: '' };
            });
        }
    };

    return (
        <StyledForm onSubmit={usage === 'signin' ? onSignIn : onSignUp}>
            <StyledDiv direction="column">
                <Label htmlFor="id">ID</Label>
                <Input data-testid="email-input" id="id" type="text" onChange={onChangeEmail} value={email} />
                {emailCheck && <StyledInfo>이메일 양식에 어긋납니다</StyledInfo>}
                <Label htmlFor="pw">PW</Label>
                <Input data-testid="password-input" id="pw" type="password" onChange={onChangePw} value={password} />
                {passwordCheck && <StyledInfo>올바르지 않은 비밀번호 양식입니다</StyledInfo>}
            </StyledDiv>
            <StyledDiv>
                {usage === 'signin' ? (
                    <>
                        <Button type="submit" dataTestId="signin-button" disabled={status} onClick={onSignIn}>
                            로그인
                        </Button>
                        <Button type="button" dataTestId="default" disabled={false} onClick={onNavigateSignUp}>
                            회원가입
                        </Button>
                    </>
                ) : (
                    <>
                        <Button type="submit" dataTestId="signup-button" disabled={status} onClick={onSignUp}>
                            제출
                        </Button>
                        <Button type="button" dataTestId="default" disabled={false} onClick={onNavigateSignIn}>
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
const StyledDiv = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
`;

const StyledInfo = styled.div`
    color: red;
`;

export default AuthForm;
