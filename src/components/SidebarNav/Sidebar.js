import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import Title from '../SidebarNav/Title/Title'

class Sidebar extends Component {
    state = { 
        Titles: [
            {title:"API",
            started:"Getting started",
            place:"Barikoi Places API",
            cityApi:"City Corporation API",
            
            },
            {title:"JavaScript Library", 
            started:"Getting started",
            place:"Barikoi.JS",
            
             },
            {title:"Android Location Library", 
            started:"Getting started", 
            place:"Location Library for Android",
            
        },
            {title:"Pricing", 
            started:"Getting started", 
            place:"Billing Cycle",
            
        }
        ],
        toggle: false
     }

    clickHandler = () => {
        const doesShow = this.state.toggle
        this.setState({
            toggle: !doesShow
        })
    }

    
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
                   click={this.clickHandler}
                   toggle={this.state.toggle}
                   />
               )
           })
       }
        return ( 
            <div className="mt-5 pt-4">
                <Container fluid>
                    <Row>
                        <Col className="mt-2" sm={4}>
                            {MainTitle}
                        </Col>
                        <Col sm={8}>hello two</Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Sidebar;