import React, {useRef} from 'react';
import './ListItem.css'
import {Link} from 'react-router-dom'
import {FaCopy} from 'react-icons/fa'


const ListItem = ({item}) => {
    const urlTextRef = useRef(null)

    return (
        <div className="row">
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
            <div  className="copy-icon">
            <FaCopy/>
            </div>
        </div>
        
        
    );
};

export default ListItem;