import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import '../Header/Header.css'
import './Slider.css'
function Slider() {
  return (
    <div>
      <Container fluid className='bg-background'>
        <Row className='bg-background'>
            <Card className="bg-background text-black ">
            <Card.Img src="./image/homepage.jpeg" alt="Card image" />
            <Card.ImgOverlay className='text_slider'>
                <Card.Text><h5 >Hi, I'm Nhi</h5></Card.Text>
                <Card.Text><p>Welcome to my food blog</p></Card.Text>
                <a href="blog.html" className='btn bg-pink'>Read the blog</a>
            </Card.ImgOverlay>
            </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Slider
