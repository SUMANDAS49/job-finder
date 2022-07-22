import React from 'react'
import {Card} from 'react-bootstrap'

const Job = () => {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Job Heading</Card.Title>
          <Card.Link href="#">creator profile link</Card.Link>
          <Card.Text>
            Description
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>
            salary : 1/-
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Job