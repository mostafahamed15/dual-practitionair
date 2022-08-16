import OrderInfo from "../../../components/order-info";
import { organizationInfo, personInfoPreview } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { Button } from "react-bootstrap";
import ModalPopup from "../../../components/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { privateHomePath } from "../../../routes/Paths";

export default function PreviewOrder() {
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center">
      {/* <h4 className="text-secondary pb-1 pt-5 fw-bold">
        {translate.privateFacility.previewOrder.title}
      </h4> */}
      <OrderInfo
        organizationInfo={organizationInfo}
        personInfo={personInfoPreview}
      />
      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4">
        <Button
          variant="primary"
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
          onClick={() => setPreviewModal(true)}
        >
          {/* {translate.privateFacility.previewOrder.sendOrder} */}
        </Button>
        <Button
          variant="secondary"
          className="text-white rounded-pill fw-bold py-2 w-25"
          onClick={() => navigate(privateHomePath())}
        >
          {/* {translate.privateFacility.previewOrder.cancel} */}
        </Button>
      </div>
      <ModalPopup
        show={previewModal}
        handleClose={() => setPreviewModal(false)}
        confirmMessage={translate.modal.sendConfirm}
      />
    </div>
  );
}
