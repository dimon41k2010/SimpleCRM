import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components/macro'
import useAxios from '../utils/useAxios'
import { useHistory } from 'react-router-dom'

const UploadExcel = () => {

    const api = useAxios()
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();

		formData.append('File', e.target.file.files[0]);
        let response = await api.post('/api/upload-excel/', formData)
        history.push('/')
      }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormTitle>Upload Excel</FormTitle>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Excel file</Form.Label>
                    <Form.Control type="file" name="file" placeholder="Enter excel file" />
                    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Upload
                </Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 10%;
    border: 1px solid #ced4da;
    padding: 20px;
    border-radius: 5%;
`;

const FormTitle = styled.div`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 20px;
`;

export default UploadExcel
