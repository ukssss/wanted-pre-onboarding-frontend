import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
    return (
        <>
            <StyledH1>
                <StyledLink to="/">wanted-pre-onboarding-frontend</StyledLink>
            </StyledH1>
        </>
    );
};

const StyledH1 = styled.h1``;

const StyledLink = styled(Link)``;

export default Header;
