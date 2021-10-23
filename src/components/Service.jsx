import React from 'react'
import styled from 'styled-components'
import How from '../img/girl2.png'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    width: 100%;
    margin-left: 100px; 
`

const Right = styled.div`
    width: 50%;
`


const Service = () => {
    return (
        <Container>
            <Left>
                
            </Left>
            <Right></Right>

        </Container>
    )
}

export default Service
