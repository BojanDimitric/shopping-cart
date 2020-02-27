import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import RemoveModal from './RemoveModal';

const Item = props => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Card className='mt-4'>
                <Card.Header as='h5'>{props.item.product.name}</Card.Header>
                <Card.Body>
                    <Card.Text>Količina: {props.item.amount}.</Card.Text>
                    <Card.Text>Cena: {props.item.price} din.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant='danger' className='btn-block' onClick={() => setShow(!show)}>Izbaci iz korpe</Button>
                </Card.Footer>
            </Card>
            <RemoveModal show={show} setShow={setShow} product={props.item.product} />
        </>
    );
};

export default Item;