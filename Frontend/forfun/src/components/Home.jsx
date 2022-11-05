import React,{useState} from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"

const Home = () => {
const [appointment, setAppointment] = useState({
    firstname:'',
    lastname:'',
    email:'',
    adults:'',
    description:''
   
})
  return (
    <Container className='mt-3'>
        <Row className='justify-content-center text-align-start'>
            <Col md={6}  >
            <Form  >
  <Form.Group  >
    <Form.Label >First Name</Form.Label>
    <Form.Control value={appointment.firstname} onChange={(e)=> setAppointment({firstname:e.target.value})} type="text" placeholder="FirstName" />
    <Form.Label className='mt-3'>Last Name</Form.Label>
    <Form.Control value={appointment.lastname} onChange={(e)=> setAppointment({lastname:e.target.value})} type="text" placeholder="LastName" />
    <Form.Label className='mt-3'>Email</Form.Label>
    <Form.Control value={appointment.email} onChange={(e)=> setAppointment({email:e.target.value})} type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group >
    <Form.Label className='mt-3'>How many</Form.Label>
    <Form.Control value={appointment.adults} onChange={(e)=> setAppointment({adults:e.target.value})} as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group >
    <Form.Label className='mt-3 bg-primary'>Description</Form.Label>
    <Form.Control value={appointment.description} onChange={(e)=> setAppointment({description:e.target.value})} as="textarea" rows={3} placeholder="any alergy or information" />
  </Form.Group>
  <Button variant="primary">Primary</Button>{' '}
</Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Home