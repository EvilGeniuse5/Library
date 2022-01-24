import { Container, Row, Col } from "react-bootstrap";
import AuthorList from "../components/AuthorList";
import BookList from "../components/BookList";

const DetailSection: React.FC = () => (
  <Container fluid className="details px-5 ">
    <Row className="flex-column-reverse flex-lg-row justify-content-between gap-5">
      <Col>
        <BookList />
      </Col>
      <Col>
        <AuthorList />
      </Col>
    </Row>
  </Container>
);
export default DetailSection;
