import React from 'react'
import styled from 'styled-components/macro'
import Navbar from '../components/Navbar'
import ContactTable from '../components/ContactTable'

const HomePage = () => {
    return (
        <>        
        <Container>
            <Navbar/>
            <ContactTable />
        </Container>
        </>
    )
}

const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
`;

export default HomePage
