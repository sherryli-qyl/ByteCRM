import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = ({ error }) => (
    <Message
        error
        hidden={!error}
    >
        <Message.Header>Sorry, Something went wrong</Message.Header>
        <p>{error && error.message}</p>
    </Message>
);

export default ErrorMessage;
