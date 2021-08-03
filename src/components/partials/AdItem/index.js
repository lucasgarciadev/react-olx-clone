import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {

    let price = '';

    if(props.data.priceNegotiable) {
        price = 'Preço negociável';
    } else {
        price = `R$ ${props.data.price}`;
    }

    return(
        <Item className="aditem" >
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemimage">
                    <img src={props.data.image} alt=""/>
                </div>

                <div className="itemname">{props.data.title}</div>
                <div className="itemprice">{price}</div>
            </Link>
        </Item>
    );
}