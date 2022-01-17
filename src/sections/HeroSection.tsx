import { Container, Row } from "react-bootstrap";

const HeroSection: React.FC = () => {
  return (
    <Container fluid className="hero">
      <Row className="hero__bg"></Row>
      <Row className="hero__credits">
        <p className="text-end">
          Photo by{" "}
          <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Anna Hunko
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </Row>
    </Container>
  );
};
export default HeroSection;
