import { AddRequest, PrivateOrgData, AddRequestResponse, PrivateOrgLicense } from '../core/types/privateOrg';
import instance from "./baseInstance";
export const Login = (data:any) => {
    return instance.post(`Account/Login`, data);
  };