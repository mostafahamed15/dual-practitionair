import OrderInfo from "../../../components/order-info";
import translate from "../../../core/locales/ar/translation.json";
import { organizationInfo, personInfo } from "../../../core/data/Data";
import DayTimePicker from "../../../components/day-time-picker";
import Endorsement from "../../../components/endorsement";
export default function CreateEditOrder() {
  return (
    <div>
      <h4 className="text-secondary pb-1 pt-5 fw-bold text-center">
          {translate.privateFacility.previewOrder.title}
        </h4>
      <OrderInfo organizationInfo={organizationInfo} personInfo={personInfo} />
      <div className="d-flex flex-row justify-content-center">
        {Object.values(translate.days).map((day: string, index: number) => (
          <DayTimePicker key={index} day={day} />
        ))}
      </div>
      <Endorsement/>
 </div>
  );
}
