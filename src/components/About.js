import React, { Component } from 'react'
import "../main.css"
import person from "./person.png"
import tweet from "./tweeter.png"
import insta from "./insta.png"
import fb from "./fb.png"


export default class About extends Component {
    render() {
        return (
            <>
                <div className="Amain">
                    <span className="imgsec">
                        <img src={person} style={{width:"70%"}}/>
                        <h1 className="name">Man Parvesh Singh Randhawa</h1>
                        <h1 className="desic">CS Graduate Student</h1>
                        <h1 className="uni">The University Of Texas, Dallas</h1>
                        <div style={{marginTop:'5%'}}><button className="btna"><img src={tweet} style={{width:"70%"}}/></button>
                    <button className="btna"><img src={fb} style={{width:"70%"}}/></button> 
                    <button className="btna"><img src={insta} style={{width:"70%"}}/></button> 
                    <button className="btna"><img src={insta} style={{width:"70%"}}/></button> 
                    <button className="btna"><img src={insta} style={{width:"70%"}}/></button> </div>
                    </span>
                    <div className="text">
                        <h1 className="head">Biography</h1>
                        <p className="para">I am a Graduate student in the Department of Computer Science at the University of Texas at Dallasgraduating in May 202. J have a Bachelor of Technology degree from the Indian institue of Technology (IIT) Guwahati</p>
                        <p className="para">Previously, I wokred at Works Applications, Signapore as a Software Engineer, where i worked on delivering central libraries, micorservices and distributed multi-tenant architecture to thousands of developers inside the company who utilized them to build various products for our customers. Aside from work, I am also anopen-source enthusiast and have created projects that were listed in Github trending.</p>
                        <p className="para">My interests lie in solving problems related to large-scale distributed software systems.</p>
                    </div>
                </div>
            </>
        )
    }
}
