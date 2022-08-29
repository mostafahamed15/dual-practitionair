import { useState } from 'react';
import OrderInfo from '../../../components/order-info';
import translate from '../../../core/locales/ar/translation.json';
import WorkSchedule from '../../../components/work-schedule';
import PeriodOfWork from '../../../components/period-of-work';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import ModalPopup from '../../../components/modal';
import { Store } from '../../../store/store';

export default function CreateEditOrder() {
  const privatePersonInfo = {
    name: Store.getState().info?.practitionerInfo?.fullNameAr,
    specialization: Store.getState().info?.practitionerInfo?.specialityAr,
    specializationId: Store.getState().info?.practitionerInfo?.specialityCode,
    specializationEndDate:
      Store.getState().info?.practitionerInfo?.scfhsRegistrationExpiryDate,
    orgName: Store.getState().info?.govEstablishmentInfo?.nameAr,
  };
  const organizationInfo = {
    orgName: Store.getState().info?.govEstablishmentInfo?.nameAr,
    type: 'مستشفي',
    city: Store.getState().info?.govEstablishmentInfo?.cityAr,
    orgId: Store.getState().info?.govEstablishmentInfo?.sehaOrganizationId,
    expDate: Store.getState().info?.privateEstablishmentInfo?.licenseExpiryDate,
    governorate:
      Store.getState().info?.privateEstablishmentInfo?.administrationNameAr,
  };
  const [checked, setChecked] = useState<boolean>(false);
  const [acceptModal, setAcceptModal] = useState<boolean>(false);
  const [rejectModal, setRejectModal] = useState<boolean>(false);
  const conditions = translate.governmenFacility.previewOrder.conditions;
  return (
    <div className="d-flex flex-column align-items-center">
      <h4 className="text-secondary pb-1 pt-5 fw-bold text-center">
        {translate.governmenFacility.previewOrder.title}
      </h4>
      <OrderInfo
        organizationInfo={organizationInfo}
        personInfo={privatePersonInfo}
      />
      <WorkSchedule />
      <PeriodOfWork />
      <Container className="  border-top  border-gray-300 pt-5">
        <h4 className="text-secondary  text-center mb-4">
          {translate.workHours.totalHours}
        </h4>
        <div className="d-flex align-items-start  ">
          <input
            type="checkbox"
            className="ms-3"
            onChange={() => setChecked(!checked)}
          />
          <ul className="border border-gray-200 p-5 rounded">
            <li className="text-gray-800  pe-4">
              {translate.governmenFacility.previewOrder.endorsement1}
            </li>
            <ol>
              {conditions.map((condition, index) => {
                return (
                  <li key={index} className="text-gray-800">
                    {condition}
                  </li>
                );
              })}
            </ol>
            <li className="text-gray-800  pe-4">
              {translate.governmenFacility.previewOrder.endorsement2}
            </li>
          </ul>
        </div>
      </Container>
      <hr className="text-gray-700 my-5 w-100" />

      <div className="d-flex justify-content-center w-50 mb-4">
        <Button
          variant="primary"
          disabled={!checked}
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
          onClick={() => {
            setAcceptModal(true);
            setRejectModal(true);
          }}
        >
          {translate.governmenFacility.acceptOrder.confirm}
        </Button>
        <Button
          variant="reject"
          className="text-white rounded-pill fw-bold py-2 w-25"
          onClick={() => {
            setAcceptModal(true);
            setRejectModal(false);
          }}
        >
          {translate.governmenFacility.acceptOrder.reject}
        </Button>
      </div>
      <p className="text-secondary p-5">{translate.copyRight}</p>
      <ModalPopup
        show={acceptModal}
        handleClose={() => setAcceptModal(false)}
        question={translate.modal.order}
        confirmMessage={translate.modal.orderConfirm}
        rejectConfirm={translate.modal.rejectConfirm}
        rejectQuestion={translate.modal.reject}
        reject={rejectModal}
      />
    </div>
  );
}
