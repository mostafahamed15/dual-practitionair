import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import translate from "../../../core/locales/ar/translation.json";

export default function SuccessReject() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div
        className={`d-flex  justify-content-center align-items-center  px-4 py-4 rounded my-5  `}
        style={{ background: "#FCF0F0", width: "550px" }}
      >
        <BsFillExclamationTriangleFill
          size={50}
          className=" ms-4 text-reject"
        />
        <p className=" fw-bold  fs-5" style={{ color: "#EB8D8D" }}>
          {translate.governmenFacility.rejectOrder.success}
          <span
            className="text-reject mx-2 rounded px-2 py-1"
            style={{ background: "#fbdfe6" }}
          >
            {translate.governmenFacility.rejectOrder.period}
            <FaLongArrowAltDown size={20} className="  text-reject" />
          </span>
          {translate.governmenFacility.rejectOrder["reject-date"]}
        </p>
      </div>

      <div
        className="d-flex flex-column justify-content-center align-items-center  py-5"
        style={{ boxShadow: "1px 2px 9px #9E9E9E", width: "550px" }}
      >
        <AiOutlineCheckCircle size={70} className="text-primary my-2" />
        <p className="text-secondary fw-bold mx-5">
          {translate.modal.cancelConfirm}
        </p>
        <Button
          variant="secondary text-white rounded-pill mx-3 py-2 px-3"
          onClick={() => {
            navigate(location.pathname.split("/home")[0] + "/home");
          }}
        >
          {translate.modal.back}
        </Button>
      </div>
    </div>
  );
}
