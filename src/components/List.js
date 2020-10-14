import React from 'react';
import  ListItem from './ListItem';
import './List.css'


const List = ({items, heading}) => {
    return (
        <div className="list-container"></div>
            {heading ?
            <div className="list-heading-wrapper">
                <p className="list-heading">{heading}</p>
            </div>
            : ""}
            
            <ul className="list-list">
                {
                    items.reverse().map((item, index) => (
                    <ListItem key={index} item={item}/>
                    ))
                }

            </ul>
        </div>
    );
}

export default List;