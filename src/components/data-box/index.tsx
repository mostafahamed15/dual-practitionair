import { Col, Container, Row } from "react-bootstrap";
import translate from "../../core/locales/ar/translation.json";
import { PractitionerInfo } from "../../core/types/Types";

interface DataBoxProps {
  data: PractitionerInfo;
}

export default function DataBox({ data }: DataBoxProps) {
  return (
    <Container
      fluid={true}
      className="bg-gray-200 py-4 px-5 fw-bold text-center text-primary d-flex flex-column justify-content-center"
    >
      <Row>
        {Object.values(data)
          .slice(0, 5)
          .map((value: string, index: number) => (
            <Col
              key={index}
              className={` mt-3 ${
                index !== 4 && "border-start border-gray-400 ps-1 "
              }`}
            >
              {Object.values(translate.dataBox)[index]}
              <Col className="text-gray-700 small mt-2">{value}</Col>
            </Col>
          ))}
      </Row>
      <hr className="text-gray-700" />
      <Row className="justify-content-center">
        <Row className="justify-content-center text-secondary mb-4">
          {translate.privateFacility.practitionerData.workData}
        </Row>
        {Object.values(data)
          .slice(5, Object.values(data).length)
          .map((value: string, index: number) => (
            <Col
              md={2}
              key={index}
              className={`${
                index !== 1 && "border-start border-gray-400 ps-3"
              }`}
            >
              {Object.values(translate.dataBox)[index + 5]}
              <Col className="text-gray-700 small mb-3 mt-2 ">{value}</Col>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
