import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import Title from '../SidebarNav/Title/Title';
import ApiStart from '../Api/ApiStart'
import style from '../Api/Start.module.css'

class Sidebar extends Component {
    state = { 
        Titles: [
            {title:"API",
            started:"Getting started",
            place:"Barikoi Places API",
            start:"Barikoi Places API",
            headerOne:"Reverse Geocode",
            headerTwo:"Reverse Geocoding (Server)",
            headerThree:"Geocoding",
            headerFour:"Autocomplete",
            headerFive:"Nearby",
            headerSix:"Distance",
            headerSeven:"Rupantor Geocoder",
            headerEight:"Routing Api",
            placeApi:"Add Place",
            districtApi:"District Api",
            subDistrictApi:"Sub-District Api",
            cityHeader:"City Api",
            unionApi:"Union Api",
            cityApi:"City Corporation API",
            ward:"Ward by Geo location",
            zone:"Zone by Geo location",
            wardZone:"Ward & Zone by Geolocation",
            cityCor:"City Corporation by Geolocation"
            // toggle: false
            },
            {title:"JavaScript Library", 
            started:"Getting started",
            place:"Barikoi.JS",
            start:"Getting started",
            headerOne:"Search",
            headerTwo:"Geocoding",
            headerThree:"Reverse Geocoding",
            headerFour:"Nearby",
            headerFive:"Autocomplete Tutorial"
            // toggle: false
             },
            {title:"Android Location Library", 
            started:"Getting started", 
            place:"Location Library for Android",
            start:"Getting started",
            headerOne:"Create an Android Studio project",
            headerTwo:"Barikoi Location Library",
            headerThree:"Get an access token",
            headerFour:"Search",
            headerFive:"Geocoding",
            headerSix:"Reverse Geocoding",
            headerSeven:"Nearby"
            // toggle: false
        },
            {title:"Pricing", 
            started:"Getting started", 
            place:"Billing Cycle",
            start:"Getting started",
            aboutPricing:"General information about our pricing",
            oneCall:"What is one call",
            limit:"What happens when i go over the call limit",
            headerOne:"Billing Cycle",
            
            // toggle: false
        }
        ],
        toggle: false,
        brak:"{",
        endBrk:"}"
     }

    //  clickHandler = () => {
    //     const doesShow = this.state.toggle
    //     this.setState({
    //         toggle: !doesShow
    //     })
    //     console.log("click")
    // }
    

    toggleHandle = (flag, current_value) => {
        this.setState({
          [flag]: !current_value
        });
        // console.log("Clicked")
      };
    
    render() { 
        
       let MainTitle;
       {
        MainTitle = this.state.Titles.map((titles, index) => {
               return(
                   <Title
                   key={index}
                   title={titles.title}
                   strat={titles.started}
                   header={titles.place}
                   cityApi={titles.cityApi}
                   click={() =>this.toggleHandle("toggle", this.state.toggle)}
                //   click={() => this.clickHandler(titles.toggle)}
                   toggled={this.state.toggle}
                   startHeader={titles.start}
                   aboutPricing={titles.aboutPricing}
                   oneCall={titles.oneCall}
                   limit={titles.limit}
                   headerOne={titles.headerOne}
                   headerTwo={titles.headerTwo}
                   headerThree={titles.headerThree}
                   headerFour={titles.headerFour}
                   headerFive={titles.headerFive}
                   headerSix={titles.headerSix}
                   headerSeven={titles.headerSeven}
                   headerEight={titles.headerEight}
                   placeApi={titles.placeApi}
                   districtApi={titles.districtApi}
                   subDistrictApi={titles.subDistrictApi}
                   cityHeader={titles.cityHeader}
                   unionApi={titles.unionApi}
                   ward={titles.ward}
                   zone={titles.zone}
                   wardZone={titles.wardZone}
                   cityCor={titles.cityCor}
                   />
               )
               
           })
       }
        return ( 
            <div className="mt-5 pt-4">
                <Container fluid>
                    <Row>
                        <Col className={` pl-0 test ${style.sidebar}`} sm={4}>
                            <div className="mt-2">
                            {MainTitle}
                            </div>
                        </Col>
                        <Col sm={8} className="">
                        <ApiStart brek={this.state.brak} endBrk={this.state.endBrk} />
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Sidebar;