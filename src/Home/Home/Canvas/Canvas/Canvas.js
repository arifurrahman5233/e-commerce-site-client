import React from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';

const Canvas = () => {
    return (
        <Container fluid>
        <Row className='  '>
          <Col sm={3} md={3} lg={3}>

            <ListGroup >
          
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                      <i className="fal fa-percentage text-secondary"></i> Special Offers 
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-vest-patches"></i> Fashion 
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-toolbox"></i> Electronics 
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-motorcycle"></i> Bikes 
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-shopping-cart"></i> Groceries 
                      </Nav.Link>
                </ListGroup.Item>
               
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-heartbeat"></i> Health & Beauty
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-music"></i> Music
                      </Nav.Link>
                </ListGroup.Item>
               
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-gift"></i>  Gifts
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-home"></i>  Home & Garden
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-paw"></i>  Pets
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-cat"></i>  Baby toys
                      </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>  
                    <Nav.Link className='text-dark' href="#deets">

                    <i class="fas fa-car"></i>  Automotive
                      </Nav.Link>
                </ListGroup.Item>
               
            </ListGroup>

          </Col>




          <Col sm={9}>sm=8</Col>
        </Row>
      
      </Container>
    );
};

export default Canvas;