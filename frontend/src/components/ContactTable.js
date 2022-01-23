import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import useAxios from '../utils/useAxios'
import { useHistory } from 'react-router-dom'
import deleteContact from '../utils/deleteContact'

const ContactTable = () => {

    let api = useAxios()
    let [loading, setLoading] = useState(false)
    let [contacts, setContacts] = useState([])
    useEffect(() => {
        setLoading(true)
        getContacts()
        setLoading(false)
    }, [loading])
    const history = useHistory()

    let getContacts = async () => {

        let response = await api.get('/api/contacts/')

        if(response.status === 200){
            setContacts(response.data)
        } 
        
    }

    const handleDelete = (history,api,id) => {
        alert('Deleted')
        deleteContact(history,api,id);
        setLoading(true)
    }

    console.log(contacts)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td onClick={() => {history.push(`/contact?id=${contact.id}`)}} >{contact.first_name}</td>
                        <td>{contact.last_name}</td>
                        <td>{contact.email}</td>
                        <td onClick={() => handleDelete(history, api,contact.id)}><Button variant="danger" type="submit">Delete</Button></td>
                        
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ContactTable