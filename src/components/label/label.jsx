import { styled, css } from 'styled-components';

const Label = ({ id, srOnly, children, ...restProps }) => {
    return (
        <StyledLabel htmlFor={id} srOnly={srOnly} {...restProps}>
            {children}
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    ${(props) =>
        props.srOnly &&
        css`
            /* sr-only */
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            clip-path: polygon(0 0, 0 0, 0 0);
            border: 0;
        `}
`;

export default Label;
