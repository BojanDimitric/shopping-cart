import React from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';

import { getCart, patchAddCart } from '../Store';

const AddModal = props => {
    let quantity = 0;
    
    const reset = () => {
        quantity.value = null;
    };

    const submit = e => {
        e.preventDefault();
        if (quantity.value.trim() ) {
            if (quantity.value.trim() <= props.product.available) {
                const data = {
                    action: 'add',
                    id_product: props.product.id,
                    amount: quantity.value.trim()
                };
                props.patchAddCart(props.token, data);
                props.getCart(props.token);
                reset();
                props.setShow(!props.show);
            } else {
                reset();
                props.setShow(!props.show);
            };
        };
    };

    return (
        <Modal centered show={props.show} onHide={() => props.setShow(!props.show)}>
            <Modal.Header closeButton>
                <Modal.Title>Dodaj proizvod u korpu!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-0'>
                        <Form.Control type='number' ref={node => quantity = node} placeholder='Količina?' />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='warning' className='btn-block' onClick={() => props.setShow(!props.show)}>Odustani</Button>
                <Button variant='success' className='btn-block' onClick={e => submit(e)}>Potvrdi</Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapState = state => ({
    token: state.auth.token
});

const mapDispatch = dispatch => ({
    getCart: (token) => dispatch(getCart(token)),
    patchAddCart: (token, data) => dispatch(patchAddCart(token, data))
});

export default connect(mapState, mapDispatch)(AddModal);