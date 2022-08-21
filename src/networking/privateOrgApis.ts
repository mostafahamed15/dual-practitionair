import { AddRequest, PrivateOrgData, AddRequestResponse, PrivateOrgLicense } from './../core/types/privateOrg';
import instance from "./baseInstance";

export const getPrivateOrgData = () => {
    return instance.get<PrivateOrgData>("privateorganization/get-list-requests-private-organization");
  };
  export const getPrivateOrgLicense = () => {
    return instance.get<PrivateOrgLicense>("privateorganization/get-license-to-hls",{
        params: {
            ParctNId:""
        }});
  };
  export const PrivateAddRequest = (data: AddRequest) => {
  return instance.post<AddRequestResponse>("privateorganization/review-request-and-deduct", data);
};
