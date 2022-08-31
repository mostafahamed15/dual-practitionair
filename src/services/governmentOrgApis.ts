import {
  ReviewRequest,
  ReviewRequestResponse,
} from '../core/types/governmentOrg';
import instance from './baseInstance';

export const getGovernmentDataLevel1 = () => {
  return instance.get<any>(
    'govorganization/get-list-requests-government-organization-level-one'
  );
};
export const getGovernmentDataLevel2 = () => {
  return instance.get<any>(
    'govorganization/get-list-requests-government-organization-level-two'
  );
};
export const reviewGovRequestLevel1 = (data: ReviewRequest) => {
  return instance.put<ReviewRequestResponse>(
    'govorganization/gov-review',
    data
  );
};
export const reviewGovRequestLevel2 = (data: ReviewRequest) => {
  return instance.put<ReviewRequestResponse>(
    'govorganization/gov-review-lvltwo',
    data
  );
};
