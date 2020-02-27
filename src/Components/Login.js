import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { auth } from '../Store';

const Login = props => {
    let username;
    let password;

    const reset = () => {
        username.value = '';
        password.value = ''
    };

    const submit = e => {
        e.preventDefault();
        if (username.value.trim() && password.value.trim()) {
            props.auth(username.value.trim(), password.value.trim());
        };
        reset();
    };

    let redirect = null;
    if (props.authenticated) {
        redirect = <Redirect to='/data' />;
    };

    return (
        <Container>
			<Row className='justify-content-center'>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} className='mt-5 pt-5'>
                    {redirect}
                    <h1 className='text-center'>Login</h1>
                    {props.loading ? <p className='text-center'>Loading!!!</p> : null}
                    {props.error ? <p className='text-center'>Error: {props.error}</p> : null}
                    <Form className='my-3' onSubmit={e => submit(e)}>
                        <Form.Group>
                            <Form.Control 
                                ref={node => username = node} 
                                type='text' 
                                placeholder='Username' 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                ref={node => password = node}
                                type='password'
                                placeholder='Password' 
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" className='btn-block'>
                            Login
                        </Button>
                    </Form>
                </Col>
			</Row>
		</Container>
    );
};

const mapState = state => ({
    authenticated: state.auth.token !== null,
    loading: state.auth.loading,
    error: state.auth.error
});

const mapDispatch = dispatch => ({
    auth: (username, password) => dispatch(auth(username, password))
});

export default connect(mapState, mapDispatch)(Login);