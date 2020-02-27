import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Pagination, Button, Jumbotron } from 'react-bootstrap';

import { getProducts, getCart, createCart, deleteCart } from '../Store';

import Product from './Product';
import Item from './Item';

const Shop = props => {
    useEffect(() => {
        props.getProducts('https://supermarket-test.digitalcube.rs/api/products?page=1&per_page=3');
        props.getCart(props.token);
    }, []);

    const prev = () => props.getProducts(props.products.summary.previous);

    const next = () => props.getProducts(props.products.summary.next);

    const numbers = summary => {
        let items = [];
        for (let i = 1; i <= summary.pages; i++) {
            const url = 'https://supermarket-test.digitalcube.rs/api/products?page=' + i + '&per_page=3';
            items.push(
                <Pagination.Item key={i} active={i === summary.current_page} onClick={() => props.getProducts(url)}>
                    {i}
                </Pagination.Item>
            );
        };
        return items;
    };

    const cart = () => {
        if (!props.cart) {
            return <Button variant='success' className='btn-block my-4' onClick={() => props.createCart(props.token)}>Uzmi korpu!</Button>;
        } else {
            if (props.cart.items.length == 0) {
                return <p className='text-center'>Dodajte proizvode u korpu!</p>;
            } else {
                const items = [];
                items.push(
                    <>
                        {props.cart.items.map((item, i) => <Item key={i} item={item} />)}
                        <hr />
                        <Jumbotron className='px-3 py-0'>
                            <h5 className='my-3'>Ukupna cena: {props.cart.price} din!</h5>
                        </Jumbotron>
                        <Button 
                            variant='danger' 
                            className='btn-block' 
                            onClick={() => { 
                                    props.deleteCart(props.token);
                                    props.getCart(props.token);
                            }}>
                                Poništi korpu!
                            </Button>
                    </>
                );
                return items;
            };
        };
    };

    return (
        <Container>
            <Row>
                <Col xs={12} md={7} className='my-5'>
                    <h1 className='text-center'>Supermarket</h1>
                    <div className='my-4'>
                        <Pagination size='lg' className='justify-content-center'>
                            <Pagination.Item onClick={() => prev()}>Pret</Pagination.Item>
                            {props.products ? numbers(props.products.summary) : null}
                            <Pagination.Item onClick={() => next()}>Sled</Pagination.Item>
                        </Pagination>
                    </div>
                    {props.products ? props.products.items.map((item, i) => <Product key={i} product={item} />) : null}
                </Col>
                <Col xs={12} md={5} className='my-5'>
                    <h1 className='text-center'>Korpa</h1>
                    {cart()}
                </Col>
            </Row>
        </Container>
    );
};

const mapState = state => ({
    token: state.auth.token,
    products: state.products.data,
    cart: state.cart.data
}); 

const mapDispatch = dispatch => ({
    getProducts: url => dispatch(getProducts(url)),
    getCart: token => dispatch(getCart(token)),
    createCart: token => dispatch(createCart(token)),
    deleteCart: token => dispatch(deleteCart(token))
});

export default connect(mapState, mapDispatch)(Shop);