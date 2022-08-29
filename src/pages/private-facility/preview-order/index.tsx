import { useState } from 'react';
import OrderInfo from '../../../components/order-info';
import translate from '../../../core/locales/ar/translation.json';
import { Button, Container } from 'react-bootstrap';
import ModalPopup from '../../../components/modal';
import { useNavigate } from 'react-router-dom';
import { privateHomePath } from '../../../routes/Paths';
import DayTimePicker from '../../../components/day-time-picker';
import WorkHours from '../../../components/work-hours';
import { addRequest } from '../../../services/practitioner';
import { dayHours } from '../../../core/types/Types';
import { Store } from '../../../store/store';

export default function PreviewOrder() {
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
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);
  const [sumHours, setSumHours] = useState<dayHours>();
  const [confirmMessage, setConfirmMessage] = useState('');

  const pullSumHours = (sum: dayHours) => {
    setSumHours(sum);
  };

  const practitionair: any = {
    practitionerInfo: {
      nationalId: Store.getState().info.practitionerInfo.nationalId,
      dateOfBirth: Store.getState().info.practitionerInfo.dateOfBirth,
      scfhsRegistrationNumber:
        Store.getState().info.practitionerInfo.scfhsRegistrationNumber,
      scfhsRegistrationExpiryDate:
        Store.getState().info.practitionerInfo.scfhsRegistrationExpiryDate,
      dateOfBirthH: Store.getState().info.practitionerInfo.dateOfBirthH,
      dateOfBirthG: Store.getState().info.practitionerInfo.dateOfBirthG,
      gender: Store.getState().info.practitionerInfo.gender,
      fullNameAr: Store.getState().info.practitionerInfo.fullNameAr,
      fullNameEn: Store.getState().info.practitionerInfo.fullNameEn,
      licenseNumber: Store.getState().info.practitionerInfo.licenseNumber,
      specialtyCode: Store.getState().info.practitionerInfo.specialtyCode,
      specialtyNameAr: Store.getState().info.practitionerInfo.specialtyNameAr,
      specialtyNameEn: Store.getState().info.practitionerInfo.specialtyNameEn,
      licenseExpiryDate:
        Store.getState().info.practitionerInfo.licenseExpiryDate,
      scfhsCategoryAr: Store.getState().info.practitionerInfo.scfhsCategoryAr,
      scfhsCategoryEn: Store.getState().info.practitionerInfo.scfhsCategoryEn,
    },
    privateEstablishmentInfo: {
      userId: Store.getState().info.privateEstablishmentInfo.userId,
      organizationId:
        Store.getState().info.privateEstablishmentInfo.organizationId,
      licenseExpiryDate:
        Store.getState().info.privateEstablishmentInfo.licenseExpiryDate,
    },
    govEstablishmentInfo: {
      organizationId: Store.getState().info.govEstablishmentInfo.organizationId,
      approvalLevel: Store.getState().info.govEstablishmentInfo.approvalLevel,
      nameAr: Store.getState().info.govEstablishmentInfo.nameAr,
      nameEn: Store.getState().info.govEstablishmentInfo.nameEn,
      clusterId: Store.getState().info.govEstablishmentInfo.clusterId,
      managementAreaId:
        Store.getState().info.govEstablishmentInfo.managementAreaId,
      sehaOrganizationIdLevel2:
        Store.getState().info.govEstablishmentInfo.sehaOrganizationIdLevel2,
      regionId: Store.getState().info.govEstablishmentInfo.regionId,
      cityId: Store.getState().info.govEstablishmentInfo.cityId,
    },
    dpRequestInfo: {
      duration: 6,
      totalWeeklyHours: sumHours,
    },
    dayScheduleInfo: [
      {
        from: '2022-08-27T19:16:59.287Z',
        to: '2022-08-27T19:16:59.287Z',
        day: 0,
        totalHours: sumHours,
      },
    ],
  };

  const sendPractitionairInfo = (info: any) => {
    addRequest(info)
      .then((response) => {
        setPreviewModal(true);
        setConfirmMessage(response?.data?.message || 'تم ارسال الرسالة بنجاح');
      })
      .catch((e) => {
        setPreviewModal(true);
        setConfirmMessage(e?.response?.data?.message || 'Server Error');
      });
  };

  const handleClick = (day: any) => {
    console.log(day);
  };

  return (
    <div className="d-flex flex-column ">
      <h4 className="text-secondary pb-1 pt-5 fw-bold text-center">
        {translate.governmenFacility.previewOrder.title}
      </h4>
      <OrderInfo
        organizationInfo={organizationInfo}
        personInfo={privatePersonInfo}
      />
      <div className="d-flex flex-row justify-content-center">
        {Object.values(translate.days).map((day: string, index: number) => (
          <DayTimePicker
            key={index}
            day={day}
            sumHours={pullSumHours}
            handleClick={handleClick}
          />
        ))}
      </div>
      <WorkHours hours={sumHours} />
      <Container>
        <h4 className="text-secondary  text-center mb-5">
          {translate.workHours.endorsement}
        </h4>
        <div className="d-flex align-items-start">
          <input
            type="checkbox"
            className="ms-4"
            onChange={() => setChecked(!checked)}
          />
          <ul className="border border-gray-200 py-5 px-4 rounded">
            {translate.workHours.endorsementBody.map(
              (item: string, index: number) => (
                <li className="text-secondary pe-3" key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </Container>
      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4 m-auto">
        <Button
          variant="primary"
          disabled={!checked}
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
          onClick={() => {
            sendPractitionairInfo(practitionair);
          }}
        >
          {translate.governmenFacility.previewOrder.sendOrder}
        </Button>
        <Button
          variant="secondary"
          className="text-white rounded-pill fw-bold py-2 w-25"
          onClick={() => navigate(privateHomePath())}
        >
          {translate.governmenFacility.previewOrder.cancel}
        </Button>
      </div>
      <p className="text-secondary p-5 text-center">{translate.copyRight}</p>

      <ModalPopup
        show={previewModal}
        handleClose={() => setPreviewModal(false)}
        confirmMessage={confirmMessage}
      />
    </div>
  );
}
