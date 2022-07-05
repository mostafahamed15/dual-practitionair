import OrderInfo from "../../../components/order-info";
import translate from "../../../core/locales/ar/translation.json";
import { organizationInfo, personInfo } from "../../../core/data/Data";
export default function RenewOrder() {
  return (
    <OrderInfo organizationInfo={organizationInfo} personInfo={personInfo} />
  );
}
