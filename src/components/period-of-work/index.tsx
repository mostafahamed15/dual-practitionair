import { AiFillClockCircle } from "react-icons/ai";
import translate from "../../core/locales/ar/translation.json";
import { workHours } from "../../core/types/Types";
interface PeriodOfWorkProps{
  workhours?:workHours
}
export default function PeriodOfWork({ workhours}:PeriodOfWorkProps) {

  const sumHours =workhours?.sum
const period=workhours?.period

  const translation = translate.privateFacility.acceptOrder.workschedule;
  return (
    <div className="d-flex justify-content-center p-3">
      <div className="d-flex flex-column px-5 fw-bold">
        <p className=" text-secondary">{translate.workHours.totalHours}</p>
        <p className=" pe-3 text-gray-800">
        {sumHours}
        {translation.workHours}
          <AiFillClockCircle size={25} className="text-gray-400 me-2" />
       
        </p>
      </div>
      <div className="d-flex flex-column px-5  fw-bold">
        <p className="text-secondary"> {translate.workHours.acceptPeriod}</p>
        <p className="pe-3 text-gray-800"> {period} {translation.period}</p>
      </div>
      <hr className="text-gray-400" />
    </div>
  );
}
