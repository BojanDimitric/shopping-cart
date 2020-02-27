import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../Store';

const Logout = props => {
    useEffect(() => props.logout(props.token), []);

    return <Redirect to='/' />;
};

const mapState = state => ({
    token: state.auth.token
});

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(Logout);