import { PracticeReportPDF, PracticeInfo } from '../core/types/practitioner';
import { PractitionerRequest } from '../core/types/practitioner';
import { Store } from '../store/store';
import instance from './baseInstance';

export const getPracticeInfo = () => {
  return instance.get<PracticeInfo>(
    `practitioner/info?NationalID=${Store.getState().id}`,
    {
      // params: {
      //   NationalID: Store.getState().id,
      // },
    }
  );
};

export const getDetailedItem = () => {
  return instance.get<any>(
    `api/practitioner/details-of-request?ReqServiceCode=${
      Store.getState().serviceCode
    }`,
    {}
  );
};
export const getPractitionerRequests = () => {
  return instance.get<PractitionerRequest>('practitioner/requests-list', {
    params: {
      ParctNId: '',
    },
  });
};
export const getPracticeReportPDF = () => {
  return instance.get<PracticeReportPDF>(
    'practitioner/get-dual-practice-report-url',
    {
      params: {
        ReqServiceCode: '',
      },
    }
  );
};

export const addRequest = (data: any) => {
  return instance.post<any>('practitioner/add-request', data);
};
