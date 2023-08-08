import PageH2 from '../../components/pageH2/pageH2';
import AuthForm from '../../components/authForm/authForm';

const SignIn = () => {
    return (
        <>
            <PageH2>Sign In</PageH2>
            <AuthForm usage="signin" />
        </>
    );
};

export default SignIn;
