import OrderInfo from "../../../components/order-info";
import translate from "../../../core/locales/ar/translation.json";
import { organizationInfo, personInfo } from "../../../core/data/Data";
import DayTimePicker from "../../../components/day-time-picker";

export default function CreateEditOrder() {
  return (
    <div>
      <OrderInfo organizationInfo={organizationInfo} personInfo={personInfo} />
      <div className="d-flex flex-row justify-content-center">
        {Object.values(translate.days).map((day: string, index: number) => (
          <DayTimePicker key={index} day={day} />
        ))}
      </div>
    </div>
  );
}
