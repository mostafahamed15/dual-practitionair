export interface GovernmentOrgData {
  requestId: number;
  nationalId: string;
  practionerName: string;
  dateOfRequset: string;
  totalWeeklyHours: number;
  resquestStatus: number;
  requestingOrgId: number;
  requestingOrgName: string;
}
export interface  ReviewRequest {
    requestServiceCode:string,
   approval: boolean,
   comment:string
 }
 export interface ReviewRequestResponse {
      data  : {
        success:boolean,
          }
 }
