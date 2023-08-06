import { styled } from 'styled-components';

const Checkbox = ({ ...restProps }) => {
    return <StyledCheckbox type="checkbox" {...restProps} />;
};

const StyledCheckbox = styled.input``;

export default Checkbox;
