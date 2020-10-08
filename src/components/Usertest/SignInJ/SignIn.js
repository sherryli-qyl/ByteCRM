import React from 'react';
import { Button, Form, Header, Input, Message, Segment } from 'semantic-ui-react';

import FlexContainer from '../../UI/flexContainer/FlexContainer';
import { COURSE_BASE_URL } from '../../Routes/URLMap';
import { login as loginFn } from '../../../components/Api/Test/auth/auth';
import { setToken } from '../../../utils/auth';

import './Style/SignIn.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: null,
            isLoading: false,
            password: '',
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    login = () => {
        this.setState({ error: null, isLoading: true }, () => {
            loginFn(this.state.email, this.state.password)
                .then(jwtToken => {
                    this.setState({ isLoading: false }, () => {
                        setToken(jwtToken);
                        const locationState = this.props.location.state;
                        const redirectTo = (locationState && locationState.from) || COURSE_BASE_URL;
                        this.props.history.replace(redirectTo);
                    });
                })
                .catch(error => this.setState({ error, isLoading: false }));
        });
    }

    render() {
        return (
            <FlexContainer justifyContentValue="center">
                <Form
                    className="login-form" size="large"
                    error={!!this.state.error}
                    loading={this.state.isLoading}
                >
                    <Header size="large" textAlign="center">
                        Learning Management System
                    </Header>
                    <Segment stacked>
                        <Form.Field>
                            <Input
                                icon='user'
                                iconPosition='left'
                                name="email"
                                onChange={this.handleChange}
                                placeholder='E-mail address'
                                value={this.state.email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                icon='lock'
                                iconPosition='left'
                                name="password"
                                onChange={this.handleChange}
                                placeholder='Password'
                                type="password"
                                value={this.state.password}
                            />
                        </Form.Field>
                       {!!this.state.error && (
                            <Message
                                error
                                header="Login failed"
                                content="Please check your email and password"
                            />
                       )}
                        <Button
                            size="large"
                            fluid
                            primary
                            onClick={this.login}
                        >
                            Login
                        </Button>
                    </Segment>
                </Form>
            </FlexContainer>
        );
    }
};

export default Login;