import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineInfoCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import translate from "../../core/locales/ar/translation.json";
import  {privateAddRequest } from  "../../services/privateOrgApis"
import { Store } from '../../store/store';
interface ModalPopupProps {
  show: boolean;
  handleClose: () => void;
  question?: string;
  confirmMessage:string
}

export default function WaitingOrderModal({
  show,
  handleClose,
  question,
  confirmMessage,
 
}: ModalPopupProps) {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(!question);
  const location = useLocation();
  const navigate = useNavigate();
  const [ success,setSuccess]=useState(false)
  const [errorMessage, setErrorMessage] = useState('');
   const RequestServiceCode=Store.getState().serviceCode
   const data={RequestServiceCode:RequestServiceCode, Approval:true,Comment:"Accept"}
 const pointsDiscount=(data:any)=>{
    privateAddRequest(data).then((response)=>{
    setSuccess(true)
    // setErrorMessage(response?.data.message|| 'Success');
    }).catch((e)=>{
      setSuccess(false)
      setErrorMessage(e?.response?.data?.message || 'Server Error');
    })
 }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="d-flex flex-column justify-content-center"
    >
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center mx-3">
        {isConfirmed ? (
         success? <>
         <AiOutlineCheckCircle size={70} className="text-primary my-2" />
         <p className="text-secondary fw-bold ">{confirmMessage}</p>
         <p className="text-secondary fw-bold ">{translate.modal.note}</p>
       </>: <p className="text-danger fw-bold p-5">{errorMessage}</p>
        
        ) : (
          <>
            <AiOutlineInfoCircle
              size={70}
              className="text-primary opacity-50 my-2"
            />
            <p className="text-secondary fw-bold">{question}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex border-0 justify-content-center mb-3">
        {isConfirmed ? (
         success?<><div className="d-flex justify-content-center flex-column">
            <div className=" mb-4 ">
              <Button
                variant="secondary text-white rounded-pill mx-3 py-2 px-3"
                onClick={() => {
                  handleClose();
                  navigate(location.pathname.split("/home")[0] + "/home");
                }}
              >
                {translate.modal.back}
              </Button>
              <Button
                variant="primary"
                className="text-white rounded-pill fw-bold py-2  ms-3"
              >
                {translate.privateFacility.acceptOrder.certificateReview}
              </Button>
            </div>
  
            <a href="#" className=" text-primary fw-bold text-center">
              {translate.modal.showlicense}
            </a>
          </div>
            </>
          :  null
        ) : (
          <>
            <Button
              variant="secondary w-25 text-white rounded-pill mx-3"
              onClick={handleClose}
            >
              {translate.modal.cancelation}
            </Button>
            <Button
              variant="primary w-25 text-white rounded-pill mx-3"
              onClick={() => {
                setIsConfirmed(true)
                pointsDiscount(data)
              }}

            >
              {translate.modal.deduct}
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
