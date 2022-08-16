import OrderInfo from "../../../components/order-info";
import translate from "../../../core/locales/ar/translation.json";
import { organizationInfo, personInfo, privatePersonInfo } from "../../../core/data/Data";
import WorkSchedule from "../../../components/work-schedule";
import PeriodOfWork from "../../../components/period-of-work";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ModalPopup from "../../../components/modal";
import { useState } from "react";


export default function CreateEditOrder() {
  const [checked, setChecked] = useState<boolean>(false);
  const [acceptModal, setAcceptModal] = useState<boolean>(false);
  const [rejectModal, setRejectModal] = useState<boolean>(false);
  const conditions = translate.governmenFacility.previewOrder.conditions;
  return (
    <div className="d-flex flex-column align-items-center">
      <h4 className="text-secondary pb-1 pt-5 fw-bold text-center">
        {translate.governmenFacility.previewOrder.title}
      </h4>
      <OrderInfo organizationInfo={organizationInfo} personInfo={privatePersonInfo} />
      <WorkSchedule />
      <PeriodOfWork />
      <Container className="  border-top  border-gray-300 pt-5">
        <h4 className="text-secondary  text-center mb-4">
          {translate.endorsement.title}
        </h4>
        <div className="d-flex align-items-start  ">
          <input type="checkbox" className="ms-3"   onChange={() => setChecked(!checked)}/>
          <ul className="border border-gray-200 p-5 rounded">
            <li className="text-gray-800  pe-4">
              {translate.governmenFacility.previewOrder.endorsement1}
            </li>
            <ol>
             {conditions.map((condition, index) => {
                return (
                  <li key={index} className="text-gray-800">
                    {condition}
                  </li>
                );
              })}
            </ol>
            <li className="text-gray-800  pe-4">
              {translate.governmenFacility.previewOrder.endorsement2}
            </li>
          </ul>
        </div>
      </Container>
      <hr className="text-gray-700 my-5 w-100" />
      
      <div className="d-flex justify-content-center w-50 mb-4">
     <Button
          variant="primary"
          disabled={!checked}
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
          onClick={() => {
            setAcceptModal(true)
            setRejectModal(true)
          }
          }
        >
          {translate.governmenFacility.acceptOrder.confirm}
        </Button>
        <Button
          variant="reject"
          className="text-white rounded-pill fw-bold py-2 w-25"
          onClick={() => {
            setAcceptModal(true)
            setRejectModal(false)
          }
          }
        >
          {translate.governmenFacility.acceptOrder.reject}
        </Button>
       
      </div>
      <p className="text-secondary p-5">{translate.copyRight}</p>
      <ModalPopup
        show={acceptModal}
        handleClose={() => setAcceptModal(false)}
        question={translate.modal.accept}
        confirmMessage={translate.modal.acceptConfirm}
        rejectConfirm={translate.governmenFacility.createOrder.rejectConfirm}
        rejectQuestion={translate.governmenFacility.createOrder.reject}
        reject={rejectModal}

      />
    </div>
  );
}
