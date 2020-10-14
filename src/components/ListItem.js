import React from 'react';
import './ListItem.css'


const ListItem = ({item}) => {

    return (
        <div className="item">
            <li className={`item-item `} >{item}</li>
        </div> 
    );
};

export default ListItem;