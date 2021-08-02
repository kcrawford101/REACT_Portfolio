import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap'
import { projects } from '../../Constants/Constants'



const Projects = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            {projects.map(({ id, image, title, description, tags, source, visit }) => (
            <Card key={id} className="w-25 h-50" style={{ margin: '10px', backgroundColor: '#393D3F' }}>
            <Card.Img variant="top" src={image} />            
            <Card.Body style={{ color: '#B8F3FF' }}>
                <Card.Title title>{title} | <span style={{fontSize:'10px'}}>{tags}</span></Card.Title>
                <hr />
                <Card.Text>
                    {description}
                </Card.Text>
                <div style={{ textAlign: 'center'}}>
                    <Button href={visit} style={{ background: '#8AC6D0', color: '#393D3F'}}className='m-2' variant="primary">Deployed</Button>
                    <Button href={source} style={{background: '#8AC6D0', color: '#393D3F'}}className='m-2' variant="primary">Repo</Button>
                </div>

            </Card.Body>
        </Card>        
                ))}
        </Row>


    );
};

export default Projects;












