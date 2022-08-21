export interface PrivateOrgData {
    requestId : number,
    nationalId : string ,
    practionerName : string ,
    dateOfRequset : string ,
    resquestStatus : number,
    practionerMainOrgId : number,
    practionerMainOrgName : string 
  }
  export interface PrivateOrgLicense{
    data: {
         licenseNumber: string,
        licenseStatus: number|string,
        licenseEndDate: string,
        establismentName: string,
        establishmentLicenseNumber: string
      }
  }
  export interface AddRequest {
    RequestServiceCode:string,
   Approval: boolean,
   Comment:string
 }
 export interface AddRequestResponse {
      data  : {
          dprequestId  : number,
          accepted  : boolean,
          transactionId : number,
          transactionCode:string  ,
          serviceCode  :   string  ,
          dpprocessId  :number,
          deductedPoints  : number,
          paymentType  : number
      }
 }


