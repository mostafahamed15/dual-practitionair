import { useState, useEffect } from 'react';
import OrderInfo from "../../../components/order-info";
import { organizationInfo, privatePersonInfo } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { GiCancel } from "react-icons/gi";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import RejectReason from "../../../components/reject-reason";
import { getDetailedItem } from '../../../services/practitioner';
export default function RejectOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orgInfo, setOrgInfo] = useState<any>();
  const [personInfo, setPersonOrgInfo] = useState<any>();
  const [detailErrorMessage, setDetailErrorMessage] = useState('');
  const [error,setError]=useState(false)
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
        setOrgInfo(org);
        setPersonOrgInfo(privatePerson);
        setError(false)
      })
      .catch((e) => {
        setError(true)
        setDetailErrorMessage(e?.response?.data?.message || 'Server Error');
      });
  });
  return (
   <>
   {error?<p>{detailErrorMessage}</p>: <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center pt-5">
        <h4 className="text-secondary pb-1 fw-bold">
          {translate.privateFacility.acceptOrder.title}
        </h4>
        <div className="d-flex align-items-center text-danger me-3">
          <GiCancel size={20} />
          <p className="mb-1 me-1 fw-bold">
            {translate.privateFacility.rejectOrder.rejected}
          </p>
        </div>
      </div>
      <OrderInfo
        organizationInfo={organizationInfo}
        personInfo={privatePersonInfo}
      />
      <RejectReason />
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
   
  
  
  }
   
   </>
  );
}
