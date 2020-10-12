import React from 'react';
import './ListItem.css'


const ListItem = ({item}) => {

    // const completeHandler = () => {
    //     setitems(items.map((item) => {
    //         if (item.id === item.id) {
    //             return {
    //                 ...item,
    //                 done: !item.done
    //             }
    //         }
    //         return item;
    //     }))
    // }

    // const deleteHandler = () => {
    //     setitems(items.filter(item => item.id !== item.id))
    // }

    return (
        <div className="item">
            <li className={`item-item `} >{item.shortUrl}</li>
        </div> 
    );
};

export default ListItem;