import React, { Component } from 'react'
import { Carousel,Card} from 'react-bootstrap'
import C11 from "./C11.png"
import C12 from "./C12.png"
import C13 from "./C131.png"
import C21 from "./C21.png"
import C22 from "./C22.png"
import Card1 from "./card1.png"
import Card2 from "./card2.png"
import Card3 from "./card3.png"
import Cl1 from "./cl1.png"
import Cl2 from "./cl2.png"
import logof from "./logo.png"
import tweet from "./tweeter.png"
import insta from "./insta.png"
import fb from "./fb.png"
import "../main.css"

export default class Home extends Component {
    render() {
        return (
            <div>
               <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={C11}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={C12}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={C13}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>

                <section className="containers">
                <h1  className="heading">
                Essential Mobile App Landing for Workspaces
                </h1>
                <p className="para">A mobile app landing page is important and essential for right amount of information about your product. Start increasing your user base upon the launch of your product</p>

                <button className='btn1'>Explore Demos ➜</button>
                </section>
                <section className="containers1">
                <h1  className="s1">
                Explore our demos
                </h1>
                <p className="para1">Explore our landing Page demos on different kind of topics. More Demos are coming soon.</p>

                </section>
                <div className="containers2">
                <Carousel variant="dark">
                <Carousel.Item>
                    <div className="item">
                    <img style={{width:"60%"}}
                    src={C21}
                    alt="First slide"
                    />
                    <h2 style={{marginTop:"3%"}}>Website Landing</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="item">
                    <img style={{width:"60%"}}
                    src={C22}
                    alt="First slide"
                    />
                    <h2 style={{marginTop:"3%"}}>App Modern Landing</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="item">
                    <img style={{width:"60%"}}
                    src={C21}
                    alt="First slide"
                    />
                    <h2 style={{marginTop:"3%"}}>Website Landing</h2>
                    </div>
                </Carousel.Item>
                </Carousel>
              </div>

              <section className="containers11">
                <h1  className="s1">
                Start your business journey with Soprano
                </h1>
                <p className="para1">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                <div className="cards flex-container wrap">
                
                <Card className="col-md-4 card">
                    <Card.Img variant="top" src={Card1} alt="logo" style={{width:"72%" , marginBottom:"25px"}}/>
                    <Card.Body>
                        <Card.Title className="cardhead">Move Your Business Online</Card.Title>
                        <Card.Text className="cardp">
                        Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                <Card className="col-md-4 card">
                    <Card.Img variant="top" src={Card2} alt="logo" style={{width:"80%"}}/>
                    <Card.Body>
                        <Card.Title className="cardhead">Switch to Soprano</Card.Title>
                        <Card.Text className="cardp">
                        Bring your business to Soprano, no matter which ecommerce platform you’re currently using.
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                <Card className="col-md-4 card">
                    <Card.Img variant="top" src={Card3} alt="logo" style={{width:"80%"}} />
                    <Card.Body>
                        <Card.Title className="cardhead">Enjoy ur benefits</Card.Title>
                        <Card.Text className="cardp">
                        Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>

                    </div>  
                     

                    <button className='btn1 margin-top'>Explore Demos ➜</button>
                </section >


                <section className="containers3">
                <h1  className="s1"style={{marginBottom:"6%"}} >
                What Clients say about our product
                </h1>
                <div className="clients">
                    <div className="client">
                        <div className="ch">
                            <img src={Cl1} style={{width:'25%'}} alt="logo" alt="logo"></img>
                            <h2 className="cn">Allen Jones</h2>
                        </div>
                        <p className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>

                    </div>
                    <div className="client">
                        <div className="ch">
                            <img src={Cl2} style={{width:'25%'}} alt="logo"></img>
                            <h2 className="cn">Allen Jones</h2>
                        </div>
                        <p className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>

                    </div>
                    

                </div>
               
                </section>

                <section className="subscribe">
                    <div className="subscribetext">
                        <h2 className="sh">Subscribe our newsletter</h2>
                        <p className="sp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore</p>
                    </div>
                    <div className="subscribeform">
                    <form action="/action_page.php">
  
                    <input type="text" id="fname" placeholder="Email Address" className="input"/>
                    </form>
                    <button className="btn2">Get Access</button>

                    </div>
                </section>
                <footer>
                    <div style={{width:"180px"}}><img src={logof} style={{width:"40%"}} alt="logo"/></div>
                    <div><button className="btn"><img src={tweet} style={{width:"80%"}} alt="logo"/></button>
                    <button className="btn"><img src={fb} style={{width:"80%"}} alt="logo"/></button> 
                    <button className="btn"><img src={insta} style={{width:"80%"}} alt="logo"/></button> </div>
                    <div className="footertext">Copywright 2020 Soprano.ai</div>
                </footer>

            </div>
        )
    }
}
