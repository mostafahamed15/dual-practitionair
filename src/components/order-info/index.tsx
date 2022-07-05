import translate from "../../core/locales/ar/translation.json";
import { OrganizationInfo, PersonInfo } from "../../core/types/Types";
import Styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";

interface OrderInfoProp {
  personInfo: PersonInfo;
  organizationInfo: OrganizationInfo;
}

export default function OrderInfo({
  personInfo,
  organizationInfo,
}: OrderInfoProp) {
  return (
    <Container className="justify-content-center px-5">
      <Row
        className={`d-flex bg-secondary text-white fw-bold fs-5 p-2 ${Styles.titleContainer}`}
      >
        <Col
          className={`border-start border-gray-500 d-flex justify-content-center ${Styles.title}`}
        >
          {translate.orderInfo.practicionar}
        </Col>
        <Col className={`d-flex justify-content-center ${Styles.title}`}>
          {translate.orderInfo.practitionarOrg}
        </Col>
      </Row>
      <Row className="d-flex bg-gray-200 py-5">
        <Col className="border-start border-gray-500">
          {Object.values(personInfo).map(
            (data: string | number, index: number) => {
              return (
                <Row key={index} className="p-3 px-5">
                  <Row
                    className={`${
                      index !== Object.values(personInfo).length - 1 &&
                      "border-bottom border-gray-500"
                    }`}
                  >
                    <Col className="text-primary fw-bold pt-2 pb-2">
                      {Object.values(translate.orderInfo.person)[index]}
                    </Col>

                    <Col className="text-gray-800 fw-bold pt-2 pb-2">
                      {data}
                    </Col>
                  </Row>
                </Row>
              );
            }
          )}
        </Col>
        <Col>
          {Object.values(organizationInfo).map(
            (data: string | number, index: number) => (
              <Row key={index} className="p-3 px-5">
                <Row
                  className={`${
                    index !== Object.values(organizationInfo).length - 1 &&
                    "border-bottom border-gray-500"
                  }`}
                >
                  <Col className="text-primary fw-bold pt-2 pb-2">
                    {Object.values(translate.orderInfo.organization)[index]}
                  </Col>
                  <Col className="text-gray-800 fw-bold pt-2 pb-2">{data}</Col>
                </Row>
              </Row>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
}
