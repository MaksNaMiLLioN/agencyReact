import React from 'react'
import styled from 'styled-components'
import How from '../img/pingirl.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'


const Container = styled.div`
    display: flex;
    height: 100%;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    width: 90%;
    height: 100%;
    margin-left: 100px; 
`

const Right = styled.div`
    width: 50%;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;

`

const Title = styled.h1`
`

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const Service = () => {



    return (
        <Container>
            <Left>
                <Image src={How}/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        business to looking for a partner of their digital media, design &
                        development, lead generation and communications requirents. We work
                        with you, not for you. Although we have a great resources

                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />    
                    </CardContainer>
                    <Button><Icon src={Play}/>How it works</Button>
                </Wrapper>
            </Right>

        </Container>
    )
}

export default Service
