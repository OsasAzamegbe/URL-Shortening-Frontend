import React from 'react';
import  ListItem from './ListItem';
import './List.css'


const List = ({items, heading}) => {
    return (
        <div className="list-container">
            {heading ?
            <div className="list-heading-wrapper">
                <p className="list-heading">HEADING</p>
            </div>
            : ""}
            
            <ul className="list-list">
                {
                    items.map((item, index) => (
                    <ListItem key={index}/>
                    ))
                }

            </ul>
        </div>
    );
}

export default List;