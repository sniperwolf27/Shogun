import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage.jsx';
import '../styles/Slider.css';
import { Col, Row } from 'react-bootstrap';

function Slider() {
  return (

   <div className='main-content mx-auto'>
     <Row> 
      <Col className='col-lg-8 carousel'>
        <Carousel>
            <Carousel.Item interval={null}>
              <CarouselImage
              imageUrl="https://hypland.com/cdn/shop/files/HYP-3_7b738586-e664-41ec-ab0e-90ebe127b598.jpg?v=1697046876" 
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
              imageUrl="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      <Col className='prueba col-lg-4'>
            
      </Col>
    </Row>
   </div>

  );
}

export default Slider;