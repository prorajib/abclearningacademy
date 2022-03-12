import React from 'react';
import{useState} from "react";
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Member from "./Member/Member";
import './About.css';


const About = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {

        fetch('./team.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);
    return (
        <main className='about-section'>
            <section>
               <div className='about-header'>  
                <h1>
                    <span className='heading-about-primary'>Improving lifes</span><br/>
                    <span className='heading-about-secondary'>Through Learning</span>
                </h1>
              
               </div>
               <div className='about-team container py-5'>
                   <h2>Meet our Teachers</h2>
                   <div className="line"/>
                   <Row xs={1} md={4} className="g-3">
                        {members.map(member => (
                            <Col>
                                <Member key={member.id} member={member}></Member>
                            </Col>
                        ))}
                    </Row>

               </div>
            </section>
        
            
        </main>
    );
};

export default About;