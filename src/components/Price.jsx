import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard'


const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Price = () => {
    return (
        <Container>
            <PriceCard price="10" type= "Basic"/>
            <PriceCard price="40" type= "Premium" />
            <PriceCard price="110" type= "Advanced" />
        </Container>
    )
}

export default Price
