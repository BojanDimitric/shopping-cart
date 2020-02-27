import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = props => {
    return (
        <Navbar variant='dark' bg='primary' expand='lg'>
            {props.authenticated ? <Link className='navbar-brand border-0' to='/shop'>SUPERMARKET</Link> : <Link className='navbar-brand border-0' to='/login'>SUPERMARKET</Link>}
            {/* {props.authenticated ? <Navbar.Brand className='border-0' href='/shop'>Shopping Cart</Navbar.Brand> : <Navbar.Brand className='border-0' href='/login'>Shopping Cart</Navbar.Brand>} */}
            <Navbar.Toggle className='border-0' aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <li className='nav-item'>
                        {props.authenticated ? <Link className='nav-link border-0' to='/shop'>Data</Link> : null}
                    </li>
                    <li className='nav-item'>
                        {props.authenticated ? <Link className='nav-link border-0' to='/logout'>Logout</Link> : <Link className='nav-link border-0' to='/login'>Login</Link>}
                    </li>
                    {/* {props.authenticated ? <Nav.Link className='border-0' href='/data'>Data</Nav.Link> : null} */}
                    {/* {props.authenticated ? <Nav.Link className='border-0' href='/logout'>Logout</Nav.Link> : <Nav.Link className='border-0' href='/login'>Login</Nav.Link>} */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapState = state => ({
    authenticated: state.auth.token !== null
});

export default connect(mapState)(Navigation);