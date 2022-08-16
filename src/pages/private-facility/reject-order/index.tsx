import OrderInfo from "../../../components/order-info";
import { organizationInfo,  privatePersonInfo } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { GiCancel } from "react-icons/gi";
import { Status } from "../../../core/enums/Enum";
import { Button } from "react-bootstrap";
import { useLocation,useNavigate } from "react-router-dom";
import RejectReason from "../../../components/reject-reason";
export default function RejectOrder() {
  const navigate = useNavigate();
  const location = useLocation();
    return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center pt-5">
        <h4 className="text-secondary pb-1 fw-bold">
          {translate.privateFacility.acceptOrder.title}
        </h4>
        <div className="d-flex align-items-center text-danger me-3">
          <GiCancel size={20} />
          <p className="mb-1 me-1 fw-bold">{Status.Rejected}</p>
        </div>
      </div>
      <OrderInfo organizationInfo={organizationInfo} personInfo={privatePersonInfo} />
      <RejectReason/>
      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4">
        <Button
            variant="secondary text-white rounded-pill mx-3 py-2 px-3"
            onClick={() => {
            navigate(location.pathname.split("/home")[0] + "/home");
            }}
          >
            {translate.modal.back}
          </Button>
        </div>
      <p className="text-secondary p-5">{translate.copyRight}</p>
    </div>
  );
}
