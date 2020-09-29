import styled, { css } from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 5fr;
    grid-gap: 1rem;
  }
`;

const FormActions = styled.h2`
  justify-self: end;

  @media screen and (min-width: 768px) {
    grid-column: 2;
  }

  button {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
    }
  }
`;

const FormHeader = styled.h2`
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-column: 1 / span 2;
  }
`;

const FormLabel = styled.label`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  ${({ required }) =>
    required &&
    css`
      ::after {
        color: var(--danger);
        content: '*';
        margin-left: 2px;
      }
    `}

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const FormInput = styled.input`
  background-color: var(--input-bg-color);
  border-radius: 0.25rem;
  border: 1px solid var(--input-border-color);
  color: var(--input-color);
  font-size: 1rem;
  height: 1.75rem;
  line-height: 1.75rem;
  outline: none;
  padding-left: 0.25rem;
  transition: all 0.2s;

  &[type='checkbox'] {
    height: auto;
  }

  :focus {
    border-color: var(--primary--hover);
    box-shadow: 0 0 2px 0 var(--primary--hover);
  }
`;

const FormSelect = styled.select`
  background-color: var(--input-bg-color);
  border-radius: 0.25rem;
  border: 1px solid var(--input-border-color);
  color: var(--input-color);
  font-size: 1rem;
  height: 1.75rem;
  line-height: 1.75rem;
  outline: none;
  transition: all 0.2s;

  :focus {
    border-color: var(--primary--hover);
    box-shadow: 0 0 2px 0 var(--primary--hover);
  }
`;

FormLabel.propTypes = {
  required: PropTypes.bool,
};

export { Form, FormActions, FormHeader, FormInput, FormLabel, FormSelect };
