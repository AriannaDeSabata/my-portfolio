import React from 'react'
import './style.css'
import { Col, Row } from 'react-bootstrap'

export default function ContactComponent() {
  
  return (
    <Row id='contacts' className='my-5'>
        <Col xs={12} className='mb-3'>
            <h4>#contacts</h4>
        </Col>
        <Col xs={12} className='contContacts'>

                <div className='contacts'>
                    <i className="bi bi-discord"></i>
                    <p>arianna_desabata</p>
                </div>
                <a href='mailto:desabatarianna@gmail.com' className='contacts'>
                    <i className="bi bi-envelope"></i>
                    <p>desabatarianna@gmail.com</p>
                </a>


        </Col>
    </Row>
  )
}
