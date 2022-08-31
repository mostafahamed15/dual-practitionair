import { Store } from '../store/store';
import instance from './baseInstance';
export const getPaymentDetailes = () => {
    return instance.get<any>(
      `api/payment/get-service-points?ReqServiceCode=${
        Store.getState().serviceCode
      }`,
      {}
    );
  };