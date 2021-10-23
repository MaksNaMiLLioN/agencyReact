import React from 'react'
import styled from 'styled-components'
import App from '../img/app.jpg'


const Container = styled.div`
    display: flex;

`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    width: 80%;


`

const Right = styled.div`
    width: 50%;

`


const Feature = () => {
    return (
        <Container>
            <Left><Image /></Left>
            <Right></Right>
        </Container>
    )
}


export default Feature
