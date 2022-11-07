import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import { useParams } from 'react-router-dom'

const Home = () => {
const [appointment, setAppointment] = useState({
    firstname:'',
    lastname:'',
    email:'',
    adults:'1',
    description:''
   
})


const params = useParams()
const appointmentId = params.appointmentId
useEffect(() => {
    if(appointmentId){
      fetchData()
    }
}, [appointmentId])
const submitFrom= (e)=>{
  e.preventDefault()
  fetchPost()
}
const fetchPost = async () => {
  try {
    const res = await fetch(appointmentId ? "http://localhost:3000/api/appointment/" + appointmentId : +
    "http://localhost:3000/api/appointment" , {
      method: appointmentId ? "PUT" : "POST",
      body: JSON.stringify(appointment),
      headers: {
        "Content-Type": "application/json",
      
      },
    });
    if (res.ok) {
      alert("successfully Saved");
  
     
     
    }
  } catch (error) {
    console.log(error)
  }
}
const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/appointment/" + appointmentId, {
  
    });
    if (res.ok) {
    const data = await res.json() 
    console.log(data)
    setAppointment(data)
    }
  } catch (error) {
    console.log(error)
  }
}
  return (
    <Container className='mt-3'>
        <Row className='justify-content-center text-align-start'>
            <Col md={6}  >
            <Form onSubmit={submitFrom} >
  <Form.Group  >
    <Form.Label >First Name</Form.Label>
    <Form.Control value={appointment.firstname} onChange={(e)=> setAppointment({...appointment,firstname:e.target.value})} type="text" placeholder="FirstName" />
    <Form.Label className='mt-3'>Last Name</Form.Label>
    <Form.Control value={appointment.lastname} onChange={(e)=> setAppointment({...appointment,lastname:e.target.value})} type="text" placeholder="LastName" />
    <Form.Label className='mt-3'>Email</Form.Label>
    <Form.Control value={appointment.email} onChange={(e)=> setAppointment({...appointment,email:e.target.value})} type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group >
    <Form.Label className='mt-3'>How many</Form.Label>
    <Form.Control value={appointment.adults} onChange={(e)=> setAppointment({...appointment,adults:e.target.value})} as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group >
    <Form.Label className='mt-3 bg-primary'>Description</Form.Label>
    <Form.Control value={appointment.description} onChange={(e)=> setAppointment({...appointment,description:e.target.value})} as="textarea" rows={3} placeholder="any alergy or information" />
  </Form.Group>
  <Button variant="primary" type='submit' >Primary</Button>{' '}
</Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Home