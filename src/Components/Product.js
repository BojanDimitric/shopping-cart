import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import AddModal from'./AddModal';

const Product = props => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Card className='mt-3'>
                <Card.Img variant='top' src={'https://supermarket-test.digitalcube.rs' + props.product.photos[0]} />
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>Cena: {props.product.price} din.</Card.Text>
                    <Button variant='info' className='btn-block' onClick={() => setShow(!show)}>Dodaj u korpu</Button>
                </Card.Body>
            </Card>
            <AddModal show={show} setShow={setShow} product={props.product} />
        </>
    );
};

export default Product;