import { Container, Row, Col } from "react-bootstrap";
import { rejectOrder } from "../../core/data/Data";
import translate from "../../core/locales/ar/translation.json";
import Styles from "./styles.module.scss";
function RejectReason() {
  return (
    <Container className="p-5 ">
      <Row
        className={` bg-secondary text-white fw-bold fs-5 p-4 ${Styles.titleContainer}`}
      >
        <p className=" text-center mb-0">
         {translate.privateFacility.rejectOrder.rejectReason}
        </p>
      </Row>
      <Row className="d-flex bg-gray-200 ">
        {Object.values(rejectOrder).map((data, index) => {
          return (
            <Col
              className={` text-center  px-0 ${
                index !== Object.values(rejectOrder).length - 1 &&
                "border-start border-gray-500"
              }`}
            >
              <p className="text-primary fw-bold py-4  border-bottom   border-gray-500">
                {Object.values(translate.privateFacility.rejectOrder)[index]}
              </p>

              <p className="text-gray-800 fw-bold py-3 ">{data}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default RejectReason;
