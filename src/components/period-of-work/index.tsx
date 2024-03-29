import React from 'react'
import { AiFillClockCircle} from "react-icons/ai";
import translate from "../../core/locales/ar/translation.json";
function PeriodOfWork() {
    const translation = translate.privateFacility.acceptOrder.workschedule;
  return (
    <div className="d-flex justify-content-center p-3">
    <div className="d-flex flex-column px-5 fw-bold" >
    <p className=" text-secondary"> {translate.endorsement.sumofhours.label}</p>
          <p className=" pe-3 text-gray-800">{translation.sumofhours}
          <AiFillClockCircle size={25}  className="text-gray-400 me-2"/>
          </p>
    </div>
    <div className="d-flex flex-column px-5  fw-bold">
    <p className="text-secondary">{translate.endorsement.approvalperiod.label} </p>
          <p className="pe-3 text-gray-800">{translation.period}</p>
    </div>
    <hr className="text-gray-400" />
  </div>
  )
}

export default  PeriodOfWork