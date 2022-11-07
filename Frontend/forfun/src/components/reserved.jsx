import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Card,ListGroup} from "react-bootstrap"
import {Link} from "react-router-dom"
const Reserved = () => {
    const [form,setForm]= useState([])
    const [error,setError]=useState(null)

    useEffect(() => {
      fetchForm();
    }, [])
    const fetchForm = async()=>{
        try {
            const res = await fetch("http://localhost:3000/api/appointment")
           
          
            if(res.ok){
                const data = await res.json()
                console.log(data)
                setForm(data)
            }else(console.log("cant fetchform"))
           
        } catch (error) {
            console.log(error.message)
        }
       

    }
  return (
  <Container>
    <Row>
        <Col>
     
            {form.map(f=>(
                <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                   <Link to={'/edit/'+f._id} key={f._id} >
                  <ListGroup.Item>{f.firstname}</ListGroup.Item></Link>
                  <ListGroup.Item>{f.lastname}</ListGroup.Item>
                  <ListGroup.Item>{f.email}</ListGroup.Item>
                </ListGroup>
              </Card>
            ))}
        </Col>
    </Row>
  </Container>
  )
}

export default Reserved
