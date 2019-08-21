import React from 'react';

import { Card } from './../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    
    <div className='card-list'>{/* cardlist tugasnya hanya untuk urusin cardListnya aja, 
    item-item yang lain itu card.component.jsx */}
        { props.monsters.map( monster => ( <Card key={monster.id} monster={monster}/> ) ) }
    </div>
);