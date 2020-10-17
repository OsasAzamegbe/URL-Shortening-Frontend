import React from 'react';
import './ListItem.css'
import {Link} from 'react-router-dom'


const ListItem = ({item}) => {

    return (
        <Link 
        to={item.url.slice(6)}
        target="_blank">
            <div className="item">
                <li>
                    <p className="item-text" >{item.shortUrl}</p>
                    <p className="item-subtext">
                        {`created: ${item.dateCreated}`}
                    </p>
                </li>
            </div> 
        </Link>
        
    );
};

export default ListItem;