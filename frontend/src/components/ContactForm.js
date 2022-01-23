import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const ContactForm = ({handleSubmit, submitBtnText, contact, handleDelete}) => {


    return (
    <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                name="first_name"
                defaultValue={contact.first_name}
            />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
                required
                type="text"
                name="last_name"
                placeholder="Last name"
                defaultValue={contact.last_name}
            />
            </Form.Group>
            
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  name="email"
                  aria-describedby="inputGroupPrepend"
                  defaultValue={contact.email}
                  />
              </InputGroup>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Address Line 1"
                name="address_line_1"
                defaultValue={contact.address_line_1}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
                type="text"
                placeholder="Address Line 2"
                name="address_line_2"
                defaultValue={contact.address_line_2}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" defaultValue={contact.city} name="city" />
            <Form.Control.Feedback type="invalid">
                Please provide a valid city.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" defaultValue={contact.state} name="state" />
            <Form.Control.Feedback type="invalid">
                Please provide a valid state.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" defaultValue={contact.zipcode} name="zipcode" />
            <Form.Control.Feedback type="invalid"> 
                Please provide a valid zip.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Label>Picture Url</Form.Label>
              <InputGroup>
                  <Form.Control
                  type="text"
                  placeholder="Picture url"
                  aria-describedby="inputGroupPrepend"
                  defaultValue={contact.picture_url}
                  name="picture_url"
                  />
                  <Form.Control.Feedback type="invalid">
                  Please choose a username.
                  </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
        </Row>
        <Button type="submit">{submitBtnText}</Button>
        {contact.id && <Button onClick={handleDelete} variant="danger">Delete</Button>}
        </Form>
    )
}

export default ContactForm