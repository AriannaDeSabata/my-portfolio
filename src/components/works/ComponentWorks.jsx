import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Row } from 'react-bootstrap'
import projects from '../../projects.json'
import './style.css'

export default function ComponentWorks() {

  const [showProject, setShowProject] = useState('')

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  const scrollDown = ()=>{
    const element = document.getElementById('projectsInfo')
    const y = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: y -100 ,
      behavior: 'smooth'
    })
  }

  console.log(projects)

  return (
    <>
      <h4 className='mt-5 my-4'>#projects</h4>
      <Row className='g-5'>
        {projects.map(el =>(
          <Col xs={12} md={6} xl={4} key={el.title}className='cont-projects  '>
            <img src={`${el['img-cover']}`}  className='img-cover' alt='img-cover'/>
            <button className='btn-show-info ' onClick={()=>{
                  setShowProject(el.name)
                  scrollDown()
                  }}>
              <i className="bi bi-search"></i>
              </button>
          </Col>
        ) )}
      </Row>

      <Row className='gy-3  projectsInfo my-5 ' id='projectsInfo'>

        {showProject && (()=>{
          const selectProject = projects.find(p =>p.name === showProject)
          if(!selectProject) return null

          return(

          <Col xs={12} className='slideProject' key={selectProject.name}>  
              <h4 className='d-none mb-5'>#info-projects</h4>
              <Row>
                <Col xs={12} md={6} className='mb-5 mb-md-0 col-img-info'>
                  {selectProject['img-info'].length > 1 ? (
                    <Carousel className='carousel-info '>
                      {selectProject['img-info'].map(i =>(
                        <Carousel.Item key={i}>
                          <img src={`${i}`} alt='img'/>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ):(
                    <div className='carousel-info'>
                      <img src={selectProject['img-info']} alt='img'/>
                    </div>
                  )}

                </Col>
                
                  <Col>
                    <h2>{selectProject.title}</h2>
                    {selectProject['link-wesite'] !== "" && (
                      <div className='info-link'>
                          <a href={selectProject['link-wesite']} className='link-website'>
                            <i className="bi bi-globe"></i>
                            {selectProject.title}
                          </a>
                          <span className='hand'>
                           👈
                          </span>
                        </div>
                    )}
  
                    <p>{selectProject.info}</p>
                    <p>{selectProject.description}</p>
                    <span>{selectProject['type-projects']}</span>

                  <div className='info-link'>
                    <span className='hand'>
                      👉
                    </span>
                    <a href={selectProject['link-github']}>
                      <i className="bi bi-github"></i>
                      Guarda su GitHub
                    </a>

                  </div>
                  </Col>
              </Row>
            </Col>
          )
     })()}

    </Row>

    </>
  )
}
