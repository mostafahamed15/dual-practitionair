import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalPopup from "../modal";
import translate from "../../core/locales/ar/translation.json";
import { Status } from "../../core/enums/Enum";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { createEditOrderPath } from "../../routes/Paths";
import { acceptOrderPath ,governmentAcceptOrderPath} from "../../routes/Paths";
import { useSelector } from "react-redux";
import { governmentFacility, privateFacility } from "../../store/actions";

interface ModalPopupProps {
  status: string;
}

export default function TableLink({ status }: ModalPopupProps) {
  const [cancelModal, setCancelModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const USER = useSelector((state) => state);

  return (
    <>
      {USER === governmentFacility().type && (
        <Button
          variant="none"
          size="lg"
           onClick={() => navigate(createEditOrderPath())}
          // onClick={() => navigate(governmentAcceptOrderPath())}
        >
          <FiEdit className="text-info" />
        </Button>
      )}
      <Button
        variant="none"
        size="lg"
        disabled={status === Status.DONE}
        onClick={() => setCancelModal(true)}
      >
        <MdOutlineCancel className="text-danger" />
      </Button>
      {USER === privateFacility().type && (
        <Button
          disabled={status === Status.ACCEPTED}
          variant="none"
          size="lg"
         onClick={() => navigate(acceptOrderPath())}
          // onClick={() => navigate(governmentAcceptOrderPath())}
        >
          <HiOutlineCheckCircle className="text-primary" />
        </Button>
      )}
      <ModalPopup
        show={cancelModal}
        handleClose={() => setCancelModal(false)}
        question={translate.modal.cancel}
        confirmMessage={translate.modal.cancelConfirm}
      />
    </>
  );
}
