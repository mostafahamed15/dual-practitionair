import { useState } from "react";
import OrderInfo from "../../../components/order-info";
import translate from "../../../core/locales/ar/translation.json";
import { organizationInfo, privatePersonInfo } from "../../../core/data/Data";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ModalPopup from "../../../components/modal";

export default function RenewOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const [acceptModal, setAcceptModal] = useState<boolean>(false);
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center pt-5">
        <h4 className="text-secondary pb-1 fw-bold">
          {translate.privateFacility.renewOrder.title}
        </h4>
      </div>
      <OrderInfo
        organizationInfo={organizationInfo}
        personInfo={privatePersonInfo}
      />

      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4">
        <Button
          variant="primary"
          className="text-white rounded-pill fw-bold py-2 px-5 ms-3"
          onClick={() => setAcceptModal(true)}
        >
          {translate.privateFacility.renewOrder.yes}
        </Button>
        <Button
          variant="secondary text-white rounded-pill mx-3 py-2  px-5"
          onClick={() => {
            navigate(location.pathname.split("/home")[0] + "/home");
          }}
        >
          {translate.privateFacility.renewOrder.no}
        </Button>
      </div>
      <p className="text-secondary p-5">{translate.copyRight}</p>
      <ModalPopup
        show={acceptModal}
        handleClose={() => setAcceptModal(false)}
        question={translate.modal.renew}
        confirmMessage={translate.modal.renewConfirm}
      />
    </div>
  );
}
