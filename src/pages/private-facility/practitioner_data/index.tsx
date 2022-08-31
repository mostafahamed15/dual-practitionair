
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DataBox from '../../../components/data-box';
import translate from '../../../core/locales/ar/translation.json';
import { previewOrderPath } from '../../../routes/Paths';
import { Store } from '../../../store/store';

export default function PractitionerData() {
  const navigate = useNavigate();
  const info = {
    practitionerName: Store.getState().info?.practitionerInfo?.fullNameAr,
    practitionerId: 'سارية',
    practitionerClass: Store.getState().info?.practitionerInfo?.specialityAr,
    nationallity: 'سعودي',
    privateHealthFacility: 'لديه رخصة سارية',
    city: Store.getState().info?.govEstablishmentInfo?.cityAr,
    workName: Store.getState().info?.govEstablishmentInfo?.nameAr,
  };


  return (
    <div className="pt-4">
      <h4 className="text-secondary mt-5 mb-3 text-center">
        {translate.privateFacility.practitionerData.practitionerData}
      </h4>

      <DataBox data={info} />

      <div className="d-flex flex-column align-items-center">
        <Button
          variant="secondary"
          className="text-white px-5 rounded-pill fw-bold my-5"
          onClick={() => navigate(previewOrderPath())}
        >
          {translate.privateFacility.practitionerData.continue}
        </Button>
        <p className="text-secondary my-5">{translate.copyRight}</p>
      </div>
    </div>
  );
}
