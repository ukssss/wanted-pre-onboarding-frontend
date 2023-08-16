import { styled } from 'styled-components';

const TodoForm = ({ onSubmit, children }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Fieldset>
                <Legend>Todo Form</Legend>
                {children}
            </Fieldset>
        </Form>
    );
};

const Form = styled.form``;
const Fieldset = styled.fieldset``;
const Legend = styled.legend``;

export default TodoForm;
