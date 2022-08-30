import { useState } from 'react';
import OrderInfo from '../../../components/order-info';
import translate from '../../../core/locales/ar/translation.json';
import { useNavigate } from 'react-router-dom';
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

  const [sumHours, setSumHours] = useState<dayHours>();
const pullSumHours = (sum: dayHours) => {
    setSumHours(sum);
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
      <div className="d-flex flex-column flex-md-row justify-content-center py-3">
        {Object.values(translate.days).map((day: string, index: number) => (
          <DayTimePicker
            key={index}
            day={day}
            sumHours={pullSumHours}
            handleClick={handleClick}
          />
        ))}
      </div>
      <WorkHours hours={sumHours}/>
    </div>
  );
}
