import translate from "../../core/locales/ar/translation.json";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInfoCircle ,AiFillClockCircle} from "react-icons/ai";

function Endorsement() {
  const options = [
    translate.endorsement.approvalperiod.options.option1,
    translate.endorsement.approvalperiod.options.option2,
  ];
  return (
    <div>
      <Container className="py-4">
        <Row>
          <Col sx={12} md={6} className="px-5">
            <p className="text-secondary fw-bold pe-4">
              {translate.endorsement.sumofhours.label}
            </p>
            <div className={`${Styles.sumofhours} d-flex justify-content-between align-items-cente border border-gray-400   text-gray-400 my-2`}>
            <input
              className="border-0 w-100"
              type="text"
              placeholder={translate.endorsement.sumofhours.placeholder}
              />
            <AiFillClockCircle size={20} />
          </div>
            <p className="text-secondary pe-4">
              <AiFillInfoCircle size={20}  className="ms-1"/>
              {translate.endorsement.sumofhours.info}
            </p>
          </Col>
          <Col sx={12} md={6} className="px-5">
            <p className="text-secondary fw-bold pe-4">
              {translate.endorsement.approvalperiod.label}
            </p>
            <select className={`${Styles.select} w-100 border border-gray300`}>
              <option value="" disabled selected>
                {translate.endorsement.approvalperiod.placeholder}
              </option>
              {options.map((option ,index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </Col>
        </Row>
        <div>
          <h4 className="text-secondary  text-center mb-5">{translate.endorsement.title}</h4>
         
          <div className="d-flex align-items-start">
         
            <input type="checkbox"/>
            <ul>

           {translate.endorsement.listitems.map((item: string, index: number) => (
          <li className="text-secondary pe-3" key={index}>{item}</li>
        ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Endorsement;
