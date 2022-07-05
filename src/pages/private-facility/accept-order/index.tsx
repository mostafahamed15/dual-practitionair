import OrderInfo from "../../../components/order-info";
import { organizationInfo, personInfo } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { AiFillCheckCircle } from "react-icons/ai";
import { Status } from "../../../core/enums/Enum";
import { Button } from "react-bootstrap";
import ModalPopup from "../../../components/modal";
import { useState } from "react";

export default function AcceptOrder() {
  const [acceptModal, setAcceptModal] = useState<boolean>(false);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center pt-5">
        <h4 className="text-secondary pb-1 fw-bold">
          {translate.privateFacility.acceptOrder.title}
        </h4>
        <div className="d-flex align-items-center text-primary me-3">
          <AiFillCheckCircle size={20} />
          <p className="mb-1 me-1 fw-bold">{Status.ACCEPTED}</p>
        </div>
      </div>
      <OrderInfo organizationInfo={organizationInfo} personInfo={personInfo} />
      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4">
        <Button
          variant="primary"
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
          onClick={() => setAcceptModal(true)}
        >
          {translate.privateFacility.acceptOrder.confirm}
        </Button>
        <Button
          variant="reject"
          className="text-white rounded-pill fw-bold py-2 w-25"
        >
          {translate.privateFacility.acceptOrder.reject}
        </Button>
      </div>
      <ModalPopup
        show={acceptModal}
        handleClose={() => setAcceptModal(false)}
        question={translate.modal.accept}
        confirmMessage={translate.modal.acceptConfirm}
      />
    </div>
  );
}
