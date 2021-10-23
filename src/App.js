import styled, { css } from "styled-components"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const IntroShape = styled.div`
  ${ Shape }
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 50% 100%);
  background-color: crimson;
`

const FeautureShape = styled.div`
  ${ Shape }
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 50% 100%);
  background-color: pink;
`

const ServiceShape = styled.div`
  ${ Shape }
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  background-color: #f88497;
`


function App() {
  return (
    <>
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
    </Container>

    <Container>
      <Feature />
    </Container>

    <Container>
      <Service />
      <ServiceShape />
    </Container>
    </>
  );
}

export default App;
