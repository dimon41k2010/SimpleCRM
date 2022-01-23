import React from 'react'
import styled from 'styled-components/macro'
import NewContactFormContainer from '../containers/NewContactFormContainer'

const NewContactPage = () => {

    return (
        <Container>
            <NewContactFormContainer />
        </Container>
    )
}

const Container = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
    border: 1px solid #ced4da;
    padding: 20px;
    border-radius: 5%;
`;


export default NewContactPage
