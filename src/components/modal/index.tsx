import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineInfoCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import translate from "../../core/locales/ar/translation.json";

interface ModalPopupProps {
  show: boolean;
  handleClose: () => void;
  question?: string;
  confirmMessage: string;
  rejectConfirm?:string;
  rejectQuestion?:string;
  reject?:boolean;
}

export default function ModalPopup({
  show,
  handleClose,
  question,
  confirmMessage,
  rejectConfirm,
  rejectQuestion,
  reject
}: ModalPopupProps) {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(!question);
  const location = useLocation();
  const navigate = useNavigate();
console.log(reject);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="d-flex flex-column justify-content-center"
    >
   {reject?( <Modal.Body className="d-flex flex-column justify-content-center align-items-center mx-5">
        {isConfirmed ? (
          <>
            <AiOutlineCheckCircle size={70} className="text-primary my-2" />
            <p className="text-secondary fw-bold mx-5">{confirmMessage}</p>
          </>
        ) : (
          <>
            <AiOutlineInfoCircle
              size={70}
              className="text-primary opacity-50 my-2"
            />
            <p className="text-secondary fw-bold">{question}</p>
          </>
        )}
      </Modal.Body>):(
 <Modal.Body className="d-flex flex-column justify-content-center align-items-center mx-5">
 {isConfirmed ? (
   <>
     <AiOutlineCheckCircle size={70} className="text-primary my-2" />
     <p className="text-secondary fw-bold mx-5">{rejectConfirm}</p>
   </>
 ) : (
   <>
    <p className="text-secondary fw-bold pt-4">{rejectQuestion}</p>
 <div className="border border-gray-300 w-100 px-5 " style={{height:"150px",borderRadius:"25px"}}>
 <input type="text"  className="border-0 w-100 h-100  "
   placeholder={translate.governmenFacility.createOrder.placeholder}
   />
 </div>
    </>
 )}
</Modal.Body>
   )

   }
 <Modal.Footer className="d-flex border-0 justify-content-center mb-3">
        {isConfirmed ? (
          <Button
            variant="secondary text-white rounded-pill mx-3 py-2 px-3"
            onClick={() => {
              handleClose();
              navigate(location.pathname.split("/home")[0] + "/home");
            }}
          >
            {translate.modal.back}
          </Button>
        ) : reject?(  (
          <>
            <Button
              variant="secondary w-25 text-white rounded-pill mx-3"
              onClick={handleClose}
            >
              {translate.modal.no}
            </Button>
            <Button
              variant="primary w-25 text-white rounded-pill mx-3"
              onClick={() => setIsConfirmed(true)}
            >
              {translate.modal.yes}
            </Button>
          </>
        )):(
          (
            <>
              <Button
                variant="secondary w-25 text-white rounded-pill mx-3"
                onClick={handleClose}
              >
                {translate.governmenFacility.createOrder.cancel}
              </Button>
              <Button
                variant="primary w-25 text-white rounded-pill mx-3"
                onClick={() => setIsConfirmed(true)}
              >
                {translate.governmenFacility.createOrder.send}
              </Button>
            </>
          )
        )
      
        }
      </Modal.Footer>
    </Modal>
  );
}
