import React, { useState } from 'react'
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
    position: relative;
`

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    width: 90%;
    height: 100%;
    margin-left: 100px; 
`

const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;

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

    const [open, setOpen] = useState(false)


    return (
        <Container>
            <Left>
                <Image open={open} src={How}/>
                <Video open={open} autoPlay loop controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
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
                    <Button onClick={()=>setOpen(true)}><Icon src={Play}/>How it works</Button>
                </Wrapper>
            </Right>

        </Container>
    )
}

export default Service
