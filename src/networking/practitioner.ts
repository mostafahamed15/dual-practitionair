import { PracticeReportPDF, PracticeInfo } from './../core/types/practitioner';
import { PractitionerRequest } from "../core/types/practitioner";
import instance from "./baseInstance";

export const getPracticeInfo = () => {
    return instance.get<PracticeInfo>("practitioner/info",{
        params: {
            NationalID:9898989898,
            DateOfBirth:'2022-08-05'
        }});
  };
export const getPractitionerRequests = () => {
    return instance.get<PractitionerRequest>("practitioner/requests-list",{
        params: {
            ParctNId:""
        }});
  };
  export const getPracticeReportPDF = () => {
    return instance.get<PracticeReportPDF>("practitioner/get-dual-practice-report-url",{
        params: {
            ReqServiceCode:""
        }});
  };