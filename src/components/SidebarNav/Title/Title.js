import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Style from '../Title/Title.module.css'
import ListItem from '../../ItemList/ListItem'


const Title = (props) => {

    const sab = props.toggled;
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
        fontSize: "21px",
        // fontWeight: 'bolder',
        fontFamily:"system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol"
       }
    return ( 
        <div onClick={props.click}>
            <ul>
                <li>
                    <a  style={style} onClick={props.click}>
                        <span>{props.title}</span>
                        <span>{Font}</span>
                    </a>
                </li>
                {
        props.toggled ? 
        <div>
            <ul>
                    <li>
                     <a  className="main subHeader">{props.strat}</a>
                     <ListItem input={props.startHeader} />
                     <ListItem input={props.aboutPricing} />
                     <ListItem input={props.oneCall} />
                     <ListItem input={props.limit} />
                    </li>
                </ul>
                <ul>
                    <li>
                     <a  className="main subHeader">{props.header}</a>
                     <ListItem input={props.headerOne} />
                     <ListItem input={props.headerTwo} />
                     <ListItem input={props.headerThree} />
                     <ListItem input={props.headerFour} />
                     <ListItem input={props.headerFive} />
                     <ListItem input={props.headerSix} />
                     <ListItem input={props.headerSeven} />
                     <ListItem input={props.headerEight} />
                     <ListItem input={props.placeApi} />
                     <ListItem input={props.districtApi} />
                     <ListItem input={props.subDistrictApi} />
                     <ListItem input={props.cityHeader} />
                     <ListItem input={props.unionApi} />
                    </li>
                </ul>
                <ul>
                    <li>
                     <a  className="main subHeader">{props.cityApi}</a>
                     <ListItem input={props.ward} />
                     <ListItem input={props.zone} />
                     <ListItem input={props.wardZone} />
                     <ListItem input={props.cityCor} />
                    </li>
                </ul>
                 </div> : null
                  }
            </ul>
        </div>
     );
}
 
export default Title;