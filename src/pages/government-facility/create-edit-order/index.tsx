import OrderInfo from "../../../components/order-info";
import translate from "../../../core/locales/ar/translation.json";
import { organizationInfo, personInfo } from "../../../core/data/Data";
import DayTimePicker from "../../../components/day-time-picker";
import { Button } from "react-bootstrap";
import ModalPopup from "../../../components/modal";
import { useState } from "react";
export default function CreateEditOrder() {
  const [createModal, setCreateModal] = useState<boolean>(false);
  return (

    <div className="d-flex flex-column align-items-center" >
      <OrderInfo organizationInfo={organizationInfo} personInfo={personInfo} />
      <div className="d-flex flex-row justify-content-center">
        {Object.values(translate.days).map((day: string, index: number) => (
          <DayTimePicker key={index} day={day} />
        ))}
      </div>
      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4">
          <Button
            variant="primary"
            className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
            onClick={() => setCreateModal(true)}
          >
            {translate.privateFacility.createOrder.payment}
          </Button>
          <Button
            variant="reject"
            className="text-white rounded-pill fw-bold py-2 w-25"
          >
            {translate.privateFacility.createOrder.reject}
          </Button>
        </div>
        <ModalPopup
          show={createModal}
          handleClose={() => setCreateModal(false)}
          question={translate.modal.pay}
          confirmMessage={translate.modal.payConfirm}
        />
    </div>
  

  );
}
