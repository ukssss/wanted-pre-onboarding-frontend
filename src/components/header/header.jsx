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

const StyledH1 = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    border: 0;
`;

const StyledLink = styled(Link)``;

export default Header;
