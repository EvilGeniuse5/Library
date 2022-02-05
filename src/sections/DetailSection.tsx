import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthorList from "../components/AuthorList";
import BookList from "../components/BookList";

const DetailSection: React.FC = () => {
  const [authors, setAuthors] = React.useState<Array<string>>(["dinu"]);

  const removeAuthor = (index: number) => {
    const newAuthors = [...authors];
    newAuthors.splice(index, 1);
    setAuthors(newAuthors);
  };

  const createAuthor = (author: string) => {
    if (author === "") {
      alert("Please enter an author name");
      return;
    }
    const newAuthors = [...authors, author];
    setAuthors(newAuthors);
  };

  return (
    <Container fluid className="details px-5 ">
      <Row className="flex-column-reverse flex-lg-row justify-content-between gap-5">
        <Col>
          <BookList  authorList={authors} />
        </Col>
        <Col>
          <AuthorList authorList={authors} removeAuthor={(index)=>removeAuthor(index)} createAuthor={(author)=>createAuthor(author)} />
        </Col>
      </Row>
    </Container>
  );
};
export default DetailSection;
