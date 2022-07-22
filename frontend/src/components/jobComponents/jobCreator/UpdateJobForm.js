import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../../utils/FormContainer'

const UpdateJobForm = ({ history, match }) => {
  const submitHandler = (e) => {
  }
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  return (
    <>
      <FormContainer>
      <Form onSubmit={submitHandler}>
            <Form.Group controlId='company'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='company'
                placeholde='Enter company'
                value='company'
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='salary'>
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type='salary'
                placeholde='Enter Salary'
                value='salary'
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholde='Enter Category'
                value='category'
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholde='Enter Description'
                value='description'
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
      </FormContainer>
    </>
  )
}

export default UpdateJobForm
