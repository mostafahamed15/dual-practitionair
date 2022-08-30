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
    <Container className="justify-content-center  bg-gray-200 pb-5">
<Row>
        <Col className="p-0 m-0 " md={6} sm={12}>
          <Col className={` d-flex bg-secondary text-white fw-bold fs-5 py-4  border-start border-gray-500 d-flex justify-content-center ${Styles.title}  ${Styles.titleContainerRight}`}>
            {translate.orderInfo.practicionar}
          </Col>
          <Col className=" bg-gray-200  ">
            {Object.values(personInfo).map(
              (data: string | number, index: number) => {
                return (
                  <Row key={index} className="pt-4 px-5">
                    <Row
                      className={`${
                        index !== Object.values(personInfo).length - 1 &&
                        "border-bottom border-gray-500 pt-3"
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
        </Col>

        <Col className="p-0 m-0 " md={6} sm={12}>
          
            <Col className={` d-flex bg-secondary text-white fw-bold fs-5 py-4 ${Styles.titleContainerLeft} border-start border-gray-500 d-flex justify-content-center ${Styles.title}`}>
              {translate.orderInfo.practicionar}
            </Col>
            <Col className=" bg-gray-200 border-end border-sm-0 border-gray-500 ">
            {Object.values(organizationInfo).map(
              (data: string | number, index: number) => (
                <Row key={index} className="pt-4 px-5">
                  <Row
                    className={`${
                      index !== Object.values(organizationInfo).length - 1 &&
                      "border-bottom border-gray-500 pt-3"
                    }`}
                  >
                    <Col className="text-primary fw-bold pt-2 pb-2">
                      {Object.values(translate.orderInfo.organization)[index]}
                    </Col>
                    <Col className="text-gray-800 fw-bold pt-2 pb-2">
                      {data}
                    </Col>
                  </Row>
                </Row>
              )
            )}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
