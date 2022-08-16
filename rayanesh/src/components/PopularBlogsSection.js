import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const PopularBlogsSection = ({ blogs }) => {
    const bgColor = "#21A362"
    return (
        <Container>
            <Row className='g-4' style={{ margin: "auto" }} bg="light">
                {
                    blogs.map((blog) => (
                        <Col className='align-items-center col-12 col-lg-4' key={blog.id}>
                            <Card className='align-items-center border-0'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Img variant="top" src={"https://picsum.photos/1000/1000?random=" + blog.id} className="img-responsive rounded" />
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Ex iure delectus accusantium laudantium eaque! Odio error
                                    commodi expedita qui reiciendis vero placeat, fuga sit officia
                                    excepturi corrupti illum facere minus.
                                </Card.Text>
                            </Card>
                        </Col>
                    )
                    )
                }
            </Row>
        </Container>
    );
}

export default PopularBlogsSection;