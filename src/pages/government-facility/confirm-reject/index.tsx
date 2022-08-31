import { Button } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import translate from "../../../core/locales/ar/translation.json";
import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmReject() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" vh-100 d-flex flex-column justify-content-center align-items-center">
      <div
        className={`d-flex  justify-content-center align-items-center  px-5 py-4 rounded my-5  `}
        style={{ background: "#E4F7F5", width: "700px" }}
      >
        <FaBell size={50} className=" ms-4 " style={{ color: "#5EB1CC" }} />
        <p className="text-secondary fw-bold  fs-5">
          {translate.governmenFacility.rejectOrder.confirm}
        </p>
      </div>

      <div
        className="d-flex flex-column justify-content-center align-items-center  py-5"
        style={{ boxShadow: "1px 2px 9px #9E9E9E", width: "700px" }}
      >
        <AiOutlineInfoCircle size={70} className="text-primary my-4" />
        <p className="text-secondary fw-bold mx-5">{translate.modal.cancel}</p>

        <div className="d-flex border-0 justify-content-center mb-3">
          <Button
            variant="primary  text-white rounded-pill mx-2 px-5"
            onClick={() => {
              navigate(location.pathname.split("/home")[0] + "/home/success");
            }}
          >
            {translate.modal.yes}
          </Button>
          <Button
            variant="secondary w-50 text-white rounded-pill mx-2 px-5"
            onClick={() => {
              navigate(location.pathname.split("/home")[0] + "/home");
            }}
          >
            {translate.modal.no}
          </Button>
        </div>
      </div>
    </div>
  );
}
