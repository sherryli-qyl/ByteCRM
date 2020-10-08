import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../../../../../Modal';
import NakedButton from '../../../../../NakedButton';
import { withRouter } from '../../../../../Router';
import withForm from '../../../../../withForm';
import Button from '../../../../../Button';
import FormItem from '../../../../../FormItem';
import Input from '../../../../../Input';
import Alert from '../../../../../Alert';
import signIn, { error as ERROR } from '../../../../../../apis/signIn';
import form from './form';

const Form = styled.form`
  padding: 16px 0;
`;

const SignInModal = ({
  onClose,
  onSignUp,
  onSignInSuccess,
  formData,
  getData,
  getErrorMessage,
  handleFormDataChange,
  isFormValid,
  router,
  fetch,
  error,
  loading,
}) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const data = getData();

    fetch(signIn(data), ERROR)
      .then((user) => {
        onClose();
        onSignInSuccess(user);
        router.push('/dashboard');
      });
  };

  return (
    <Modal onClose={onClose}>
      <Modal.Header>Sign In</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          {error && (
            <FormItem>
              <Alert>{error}</Alert>
            </FormItem>
          )}
          {Object.keys(form).map((key) => {
            const { label, type } = form[key];
            const { value, touched } = formData[key];

            const errorMessage = touched ? getErrorMessage(key) : '';

            return (
              <FormItem
                key={key}
                htmlFor={key}
                label={label}
                errorMessage={errorMessage}
              >
                <Input
                  id={key}
                  type={type}
                  error={errorMessage}
                  value={value}
                  onChange={handleFormDataChange(key)}
                />
              </FormItem>
            );
          })}
          <FormItem>
            <Button
              disabled={!isFormValid() || loading}
              width="100%"
              variant="success"
            >
              Sign in
            </Button>
          </FormItem>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        Not a member yet?&nbsp;
        <NakedButton variant="link" onClick={onSignUp}>Sign up now</NakedButton>
      </Modal.Footer>
    </Modal>
  );
};

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignInSuccess: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

const WithFetchSignInModal = withFetch(SignInModal);
const WithFormSignInModal = withForm(form)(WithFetchSignInModal);
const WithRouterSignInModal = withRouter(WithFormSignInModal);

export default WithRouterSignInModal;
