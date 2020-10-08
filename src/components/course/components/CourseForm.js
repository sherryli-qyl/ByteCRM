import React from 'react';
import { Button, Container, Form, Image } from 'semantic-ui-react';

const CourseForm = props => {
    return (
        <Container>
            <Form>
                <Form.Field>
                    <label>Course Code</label>
                    <input
                        name="code"
                        onChange={props.handleChange}
                        placeholder="Course Code"
                        value={props.code}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Course Name</label>
                    <input
                        name="name"
                        onChange={props.handleChange}
                        placeholder="Course Name"
                        value={props.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Course Description</label>
                    <textarea
                        name="description"
                        onChange={props.handleChange}
                        placeholder="Course Description"
                        value={props.description}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Course Image</label>
                    <Image size="small" src={props.image} />
                    <input
                        disabled
                        name="image"
                        onChange={props.handleChange}
                        placeholder="Course Image"
                        value={props.image}
                    />
                </Form.Field>
                <Button
                    color="green"
                    disabled={props.isButtonDisabled}
                    onClick={props.handleSubmit}
                >
                    {props.submitButtonText}
                </Button>
            </Form>
        </Container>
    );
};

export default CourseForm;
