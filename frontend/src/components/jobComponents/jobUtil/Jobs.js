import React from 'react'
import Job from './Job'
import { Container, Row, Col } from 'react-bootstrap'

const Jobs = () => {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
          <Job/>
        
      </Row>
    </Container>
  )
}

export default Jobs