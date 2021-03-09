import React from 'react';
import './card-list.styles.css';

import {Card} from '../card/card.component.jsx';




export const CardList = props => {
    /*Props is any attribute that is placed on the component when it is used*/
    /*Children are anything passed in between the brackets where the component is used*/
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster = {monster}/>
            ))}
        </div>
    )
    
}