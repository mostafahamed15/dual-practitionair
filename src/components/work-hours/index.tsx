import { useEffect, useState } from "react";
import translate from "../../core/locales/ar/translation.json";
import { useTranslation } from "react-i18next";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInfoCircle, AiFillClockCircle } from "react-icons/ai";
import { dayHours } from "../../core/types/Types";
import Endorsement from "../endorsement"
interface WorkHoursProps {
  hours?: dayHours;
}

export default function WorkHours({ hours }: WorkHoursProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const [period,setPeriod]= useState<boolean>(false);
  const [totalHours, setTotalHours] = useState<number>(0);
  const [optionValue,setOptionValue]=useState<number>(0);
  const [daysArray, setDaysArray] = useState<dayHours[]>([{ day: "", sum: 0 ,checked:false}]);
 const handlOnChange=(e:any)=>{
  let value= e.target.value> 0? true : false
   setPeriod(value)
   setOptionValue(e.target.value)
   }

  const { t } = useTranslation();
useEffect(() => {
    if (hours) {
      let tempArray = daysArray;
      let index = tempArray.findIndex((x) => x.day == hours.day);
      index === -1 ? tempArray.push(hours) : (tempArray[index] = hours);
      setDaysArray(tempArray);
      let temptotal = 0;
      let dayIndex = daysArray.findIndex((x) => x.checked == true);
      dayIndex===-1?setChecked(false):setChecked(true)
      let workDays=daysArray.filter((day)=>{return day.checked===true})
      workDays.map((x) => (temptotal += x.sum));
      setTotalHours(temptotal);
    }
  }, [daysArray, hours]);

  return (
    <div>
      <Container className="py-4">
        <Row>
          <Col sx={12} md={6} className="px-5">
            <p className="text-secondary fw-bold pe-4">
              {translate.workHours.totalHours}
            </p>
            <div
              className={`${Styles.workHours} d-flex justify-content-between align-items-cente border border-gray-400   text-gray-400 my-2`}
            >
              <p>
                {t(translate.workHours.sumHours, {
                  number: totalHours,
                })}
              </p>
              <AiFillClockCircle size={20} />
            </div>
            <p className="text-secondary pe-4">
              <AiFillInfoCircle size={20} className="ms-1" />
              {totalHours >= 16
                ? <p className="text-danger d-inline">{translate.workHours.limit}</p>
                : translate.workHours.maxHoures}
            </p>
          </Col>
          <Col sx={12} md={6} className="px-5">
            <p className="text-secondary fw-bold pe-4">
              {translate.workHours.acceptPeriod}
            </p>
            <select className={`${Styles.select} w-100 border text-gray-400`} onChange={(e)=>handlOnChange(e) } >
              {(translate.workHours.periodOptions).map((option, index:number) => {
                  return <option key={index} value={option.value} >{option.key}</option>;
                }
              )}
            </select>
          </Col>
        </Row>
        <Endorsement daychecked={checked} sumHours={totalHours} acceptPeriod={period} optionValue={optionValue}/>
      </Container>
    </div>
  );
}
