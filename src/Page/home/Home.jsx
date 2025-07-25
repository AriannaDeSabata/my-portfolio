import React from 'react'
import { Col, Row} from 'react-bootstrap'
import './style.css'
import SkillComponent from '../../components/skills/SkillComponent'
import ContactComponent from '../../components/contacts/ContactComponent'
import ComponentWorks from '../../components/works/ComponentWorks'


export default function Home() {
  return (
    <>
    <div id='info'>
      <Row>
        <Col xs={12} className='title'>
          <h1 className='welcome'>Benvenuto nel mio portfolio</h1>
          <h2 className='me'>Io sono Arianna De Sabata</h2>
          <h3 className='job'>Full Stack Web Developer</h3>
        </Col>
        <Col xs={12} sm={6} md={7} xl={8} className='info pe-xl-5'>
          <p>Ho iniziato il mio percorso come Junior Web Developer completando due corsi specializzati. Durante il mio percorso formativo ho realizzato diversi progetti scolastici, sia frontend che backend, esercitandomi nella creazione di interfacce responsive, funzionali e animate, con particolare attenzione all’esperienza utente.
          Ora sono alla ricerca di un’opportunità per entrare nel mondo dello sviluppo web e continuare a crescere professionalmente.</p>
        </Col>

        <Col xs={12} sm={6} md={5}  xl={4}className='status'>
          <div className='d-flex gap-2 flex-column'>
            <p>Questo sito è stato creato con React, includendo animazioni per migliorare l’esperienza utente (UX) e rendere la navigazione più fluida e coinvolgente.</p>
            <div className='info-link'>
              <span className='hand'>
                  👉
              </span>
                <a href='https://github.com/AriannaDeSabata/my-portfolio.git'>
                <i className="bi bi-github"></i>
                    Guarda su GitHub
                </a>
            </div>
          </div>

        </Col>
      </Row>
    </div>

    <div id='projects'>
      <ComponentWorks/>
    </div>
    <div id='skills'>
      <SkillComponent/>
    </div>
    <div id='contacts'>
      <ContactComponent/>
    </div>
    </>
  )
}
