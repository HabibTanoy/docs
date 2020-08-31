import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Style from '../Title/Title.module.css'
import ListItem from '../../ItemList/ListItem'


const Title = (props) => {

    const sab = props.toggle;
    let Font;
    if(sab) {
        Font = (
            <FontAwesomeIcon icon={faChevronUp} />
        )
    } else {
        Font = (
            <FontAwesomeIcon icon={faChevronDown} />
        )
    }

    const style={
        color: "#606770",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "20px"
       }
    return ( 
        <div>
            <ul>
                <li>
                    <a href="#!" style={style}>
                        <span>{props.title}</span>
                        <span>{Font}</span>
                    </a>
                </li>
                <ul>
                    <li>
                     <a href="#!">{props.strat}</a>
                     <ListItem />
                    </li>
                </ul>
                <ul>
                    <li>
                     <a href="#!">{props.header}</a>
                    </li>
                </ul>
                <ul>
                    <li>
                     <a href="#!">{props.cityApi}</a>
                    </li>
                </ul>
            </ul>
        </div>
     );
}
 
export default Title;