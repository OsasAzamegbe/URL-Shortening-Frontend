import React, {useRef} from 'react';
import './ListItem.css'
import {Link} from 'react-router-dom'
import {FaCopy} from 'react-icons/fa'


const ListItem = ({item}) => {
    const urlTextRef = useRef(null)

    const copyToClipboard = e => {
        const text = urlTextRef.current.innerHTML
        navigator.clipboard.writeText(text)
        window.alert(`Copied "${text}" to clipboard!`)
    };

    const date = (dateInput) => {
        const options = {
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric' 
        }
        const created = new Date(dateInput)
        return created.toLocaleString("en-US", options)
    }

    return (
        <div>
            <div className="row">
                <Link 
                to={item.url.slice(6)}
                target="_blank">
                    <div className="item">
                        <li>
                            <p
                            ref={urlTextRef} 
                            className="item-text" >
                                {item.shortUrl}
                            </p>
                            <p className="item-subtext">
                                {`created: ${date(item.dateCreated)}`}
                            </p>
                        </li>
                    </div> 
                </Link>
                <div onClick={copyToClipboard}  className="copy-icon">
                <FaCopy/>
                </div>
            </div>
        </div>
        
        
        
    );
};

export default ListItem;