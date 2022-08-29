import OrderInfo from "../../../components/order-info";
import { organizationInfo, privatePersonInfo } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { AiFillCheckCircle } from "react-icons/ai";
import { Status } from "../../../core/enums/Enum";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import WorkSchedule from "../../../components/work-schedule";
import PeriodOfWork from "../../../components/period-of-work";

export default function AcceptOrder() {
  const navigate = useNavigate();
  const location = useLocation();

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
      <OrderInfo
        organizationInfo={organizationInfo}
        personInfo={privatePersonInfo}
      />
      <WorkSchedule />
      <PeriodOfWork />
      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4">
        <Button
          variant="primary"
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
        >
          {translate.privateFacility.acceptOrder.certificateReview}
        </Button>
        <Button
          variant="secondary text-white rounded-pill fw-bold mx-3 py-2 px-3"
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
