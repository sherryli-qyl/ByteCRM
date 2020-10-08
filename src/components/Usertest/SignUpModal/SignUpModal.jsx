import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../../Modal';
import NakedButton from '../../NakedButton';
import Button from '../../Button';
import { withRouter } from '../../../components/UI2/Router';
import FormItem from '../../../components/UI2/FormItem';
import withForm from '../../../components/UI2/withForm';
import Input from '../../../components/UI2/Input';
import Alert from '../../../components/UI2/Alert';
import signUp, { error as ERROR } from '../../../components/Api/signUp';
import form from './form';

const Form = styled.form`
  padding: 16px 0;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    const {
      onClose,
      onSignUpSuccess,
      router,
      getData,
      isFormValid,
    } = this.props;

    event.preventDefault();

    this.setState({
      error: null,
      loading: true,
    });

    if (!isFormValid()) {
      return;
    }

    const data = getData();

    signUp(data)
      .then((res) => {
        this.setState({
          loading: false,
        });

        if (!res.ok) {
          throw res;
        }

        return res.json();
      })
      .then((user) => {
        onClose();
        onSignUpSuccess(user);
        router.push('/dashboard');
      })
      .catch((error) => {
        if (ERROR[error.status]) {
          this.setState({
            error: ERROR[error.status],
          });

          return;
        }

        throw error;
      });
  }

  render() {
    const { error, loading } = this.state;
    const {
      onClose,
      onSignIn,
      formData,
      getErrorMessage,
      handleFormDataChange,
      isFormValid,
    } = this.props;

    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
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
                {loading ? 'loading' : 'Sign up'}
              </Button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Already a member?&nbsp;
          <NakedButton variant="link" onClick={onSignIn}>Sign in now</NakedButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignUpModal.propTypes = {
  onSignUpSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

const WithFormSignUpModal = withForm(form)(SignUpModal);
const WithRouterSignUpModal = withRouter(WithFormSignUpModal);

export default WithRouterSignUpModal;
