import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  
  const [text, setText] = useState('');

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="main_text">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="welcome">
                <h1>{`Welcome to SocialCrypto`} 
                {text}</h1>
                  <p>A platform for do-gooders with a will to make a change in the world or at least in the lives of people who deserve better.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
