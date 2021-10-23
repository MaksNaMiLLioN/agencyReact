import React from 'react'
import styled from 'styled-components'
import App from '../img/app.jpg'
import AnimatedShapes from './AnimatedShapes'


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
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.span`
    font-size: 70px;
`

const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`

const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    margin-top: 20px;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
`


const Feature = () => {
    return (
        <Container>
            <Left><Image src={App}/></Left>
            <Right>
                <Title>
                    <b>good</b> design <br/>
                    <b>good</b> business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>We help our clients succeed by creating brand identities, digital experiences,
                    and print materials that communicate clearly, achieve marketing goals, and look fantastic.
                </Desc>
                <Desc>
                    We care about your business and guarantee you to achieve marketing goals.
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}


export default Feature
