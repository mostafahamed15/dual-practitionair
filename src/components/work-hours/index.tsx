import { useEffect, useState } from "react";
import translate from "../../core/locales/ar/translation.json";
import { useTranslation } from "react-i18next";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInfoCircle, AiFillClockCircle } from "react-icons/ai";
import { dayHours } from "../../core/types/Types";
interface WorkHoursProps {
  hours?: dayHours;
}

function WorkHours({ hours }: WorkHoursProps) {
  const [totalHours, setTotalHours] = useState<number>(0);
  const [daysArray, setDaysArray] = useState<dayHours[]>([
    { name: "", sum: 0 },
  ]);

  const { t } = useTranslation();

  useEffect(() => {
    if (hours) {
      let tempArray = daysArray;
      let index = tempArray.findIndex((x) => x.name == hours.name);
      index === -1 ? tempArray.push(hours) : (tempArray[index] = hours);
      setDaysArray(tempArray);
      let temptotal = 0;
      daysArray.map((x) => (temptotal += x.sum));
      setTotalHours(temptotal);
    }
  }, [daysArray, hours]);

  return (
    <div>
      <Container className="py-4">
        <Row>
          <Col sx={12} md={6} className="px-5">
            <p className="text-secondary fw-bold pe-4">
              {translate.endorsement.sumofhours.label}
            </p>
            <div
              className={`${Styles.sumofhours} d-flex justify-content-between align-items-cente border border-gray-400   text-gray-400 my-2`}
            >
              <p>
                {t(translate.endorsement.sumofhours.placeholder, {
                  number: totalHours,
                })}
              </p>
              <AiFillClockCircle size={20} />
            </div>
            <p className="text-secondary pe-4">
              <AiFillInfoCircle size={20} className="ms-1" />
              {totalHours >= 16
                ? translate.endorsement.sumofhours.limit
                : translate.endorsement.sumofhours.maxHoures}
            </p>
          </Col>
          <Col sx={12} md={6} className="px-5">
            <p className="text-secondary fw-bold pe-4">
              {translate.endorsement.approvalperiod.label}
            </p>
            <select className={`${Styles.select} w-100 border text-gray-400`}>
              {Object.values(translate.endorsement.approvalperiod.options).map(
                (option, index) => {
                  return <option key={index}>{option}</option>;
                }
              )}
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default WorkHours;
