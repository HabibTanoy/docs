import React, { Component } from 'react';

const ListItem = (props) => {
    return ( 
        <div>
            <ul>
                <li>
                  <a href="">{props.input}</a>
                </li>
            </ul>
        </div>
     );
}
 
export default ListItem;