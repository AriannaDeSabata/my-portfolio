import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './style.css'

export default function SkillComponent() {
  return (

    <Row className='gx-3 gy-3 my-5 '>
        <Col xs={12} >
            <h4>#skills</h4>
        </Col>

        <Col xs={4} md={2}>
            <h6>Language</h6>
            <ul>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS3</li>
                <li>PHP</li>
            </ul>
        </Col>        
        <Col xs={4} md={10} >
            <h6>Tools</h6>
            <ul>
                <li>Visual Studio Code</li>
                <li>Figma</li>
                <li>GitHub</li>
                <li>PostMan</li>
            </ul>
        </Col>
        <Col xs={4}  md={2} >
            <h6>Other</h6>
            <ul>
                <li>Node.js</li>
                <li>Cloudinary</li>
                <li>Anxios</li>
                <li>API</li>
                <li>AJAX</li>
                <li>JWT</li>
            </ul>
        </Col>
        <Col xs={4} md={2}>
            <h6>Frameworks</h6>
            <ul>
                <li>React</li>
                <li>Bootsrap</li>
                <li>Expres.js</li>
            </ul>
        </Col>

        <Col xs={2}>            
            <h6>Database</h6>
                <ul>
                    <li>MySQL</li>
                    <li>Mongodb</li>
                </ul>
        </Col>
         <Col xs={6} md={3} className='px-5 col-cube' >
            <div className='box-container'>
                <div className='box-wrapper'>
                    <div className='cube-face cube-front'>HTML</div>
                    <div className='cube-face cube-back'>CSS3</div>
                    <div className='cube-face cube-bottom'>JS</div>
                    <div className='cube-face cube-top'>PHP</div>
                    <div className='cube-face cube-left'>REACT</div>
                    <div className='cube-face cube-right'>BOOTSTRAP</div>
                </div>
            </div>
            <span className='showText'>
                
            </span>
        </Col>

    </Row>
  )
}
