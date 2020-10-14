import React from 'react';
import  ListItem from './ListItem';
import './List.css'


const List = ({items, heading}) => {
    return (
        <div className="list-container">
            {heading ?
            <div className="list-heading-wrapper">
                <p className="list-heading">{heading}</p>
            </div>
            : ""}
            
            <ul className="list-list">
                {
                    [1,2,3,4].map((item, index) => (
                    <ListItem key={index} item={item}/>
                    ))
                }

            </ul>
        </div>
    );
}

export default List;