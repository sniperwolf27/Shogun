import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage.jsx';
import '../styles/Slider.css';
import { Col, Row } from 'react-bootstrap';

function Slider() {
  return (
    <Row md={2}> 
      <Col>
        <Carousel>
            <Carousel.Item interval={null}>
              <CarouselImage
              imageUrl="https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              text="First slide"/>
              {/*
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
              */}
              
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <CarouselImage
              imageUrl="https://images.unsplash.com/photo-1705877883568-a26cbc63bce2?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Second slide"/>
              {/*
               <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
              */}
             
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <CarouselImage
              imageUrl="https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Third slide"/>
              {/*
               <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
              */}
            </Carousel.Item >
        </Carousel>
      </Col>
    </Row>

  );
}

export default Slider;