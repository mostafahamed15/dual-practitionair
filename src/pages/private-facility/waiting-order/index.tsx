import { useState, useEffect } from 'react';
import OrderInfo from '../../../components/order-info';
import translate from '../../../core/locales/ar/translation.json';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Status } from '../../../core/enums/Enum';
import { Button } from 'react-bootstrap';
import WorkSchedule from '../../../components/work-schedule';
import PeriodOfWork from '../../../components/period-of-work';
import WaitingOrderModal from '../../../components/waiting-order-modal';
import { getDetailedItem } from '../../../services/practitioner';
import { workHours } from '../../../core/types/Types';
import { getPaymentDetailes } from '../../../services/paymentApi';
export default function WaitingOrder() {
  const [acceptModal, setAcceptModal] = useState<boolean>(false);
  const [orgInfo, setOrgInfo] = useState<any>({});
  const [personInfo, setPersonOrgInfo] = useState<any>({});
  const [detailErrorMessage, setDetailErrorMessage] = useState('');
  const [workHours, setworkHours] = useState<workHours>({ sum:0,
    period:0});
  const [points,setPoints]=useState(0)
  const [error,setError]=useState(false)
  const [workSchedule,setWorkSchedule]=useState([])
  useEffect(() => {
    getDetailedItem()
      .then((response) => {
        const data = response.data.data;
        const org = {
          orgName: data.govOrgName,
          type: data.govOrgCategoryName,
          city: data.govCityName,
          orgId: data.requestid,
          expDate: data.scfhsRegistrationExpiryDate,
          governorate: data.directorate,
        };
        const privatePerson = {
          name: data.practitionerFullName,
          specialization: data.specialtyName,
          specializationId: data.prvOrgLicenseNumber,
          specializationEndDate: data.privateEstablishmentLicenseExpiryDate,
          orgName: data.prvOrgName,
        };
        const workHours:workHours={
          sum:data.totalWeeklyHours,
          period:data.duration
        }
        setOrgInfo(org);
        setPersonOrgInfo(privatePerson);
        setworkHours(workHours)
        setWorkSchedule(data.doctorDaySchedule)
        setError(false)
      })
      .catch((e) => {
        setError(true)
        setDetailErrorMessage(e?.response?.data?.message || 'Server Error');
      });

     getPaymentDetailes().then((response)=>{
        let data=response.data
        let points=data.service_price
         setPoints(points)
        }).catch((e)=>{
     
        })
   
  });
  return (
 <>
 {error ?<p className='text-danger fw-bold'>{detailErrorMessage}</p>:   <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center pt-5">
        <h4 className="text-secondary pb-1 fw-bold">
          {translate.privateFacility.acceptOrder.title}
        </h4>
        <div className="d-flex align-items-center text-primary me-3">
          <AiFillCheckCircle size={20} />
          <p className="mb-1 me-1 fw-bold">{Status.ACCEPTED}</p>
        </div>
      </div>
      <OrderInfo organizationInfo={orgInfo} personInfo={personInfo} />
      <WorkSchedule workSchedule={workSchedule} />
      <PeriodOfWork  workhours={workHours}/>
      <hr className="text-gray-700 my-5 w-100" />
      <h5 className="text-secondary py-3 fw-bold">
        {translate.privateFacility.waitingOrder.note  }
      </h5>
      <div className="d-flex justify-content-center w-50 mb-4">
        <Button
          variant="primary"
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
          onClick={() => setAcceptModal(true)}
        >
          {translate.privateFacility.waitingOrder.confirm}
        </Button>
        <Button variant="reject text-white rounded-pill mx-3 py-2 px-3">
          {translate.privateFacility.waitingOrder.cancel}
        </Button>
      </div>
      <WaitingOrderModal
        show={acceptModal}
        handleClose={() => setAcceptModal(false)}
        question={translate.modal.accept}
        confirmMessage={translate.modal.acceptConfirm}
      />
      <p className="text-secondary p-5">{translate.copyRight}</p>
    </div>}
 </>
  );
}
