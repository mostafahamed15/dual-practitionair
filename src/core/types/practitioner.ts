interface      privateEstablishmentInfo  {
  organizationId : number,
  privateUserId : number,
  nameAr :  string ,
  nameEn :  string ,
  establishmentTypeAr :  string ,
  establishmentTypeEn :  string ,
  cityAr :  string ,
  cityEn :  string ,
  cityId : number,
  regionAr :  string ,
  regionEn :  string ,
  regionId : number,
  licenseNumber :  string ,
  licenseExpiryDate :  string ,
  administrationNameAr :  string ,
  administrationNameEn :  string 
}
interface  govEstablishmentInfo  {
  sehaOrganizationId :number,
  nameAr :  string ,
  nameEn :  string ,
  facilitySector :  string ,
  approvalLevel : number,
  sehaOrganizationIdLevel2 : number,
  clusterId :  string ,
  managementAreaId : number,
  cityId : number,
  regionId : number
}
export interface PracticeInfo{
     data : {
         practitionerInfo : {
           fullNameAr :  string ,
           fullNameEn :  string ,
           specialityCode :  string ,
           specialityAr :  string ,
           specialityEn :  string ,
           scfhsRegistrationNumber :  string ,
           scfhsRegistrationExpiryDate : string,
           licenseNumber :  string ,
           licenseExpiryDate : string,
           gender :  string ,
           dateOfBirthH :  string ,
           dateOfBirthG :  string ,
           scfhsCategoryAr :  string ,
           scfhsCategoryEn :  string 
        },
         privateEstablishmentInfo : privateEstablishmentInfo,
         govEstablishmentInfo : govEstablishmentInfo
      }
  }
export interface PractitionerRequest {
     data : {
         request : [
          {
             requestid :  string |number,
             govOrgName :  string ,
             cityName :  string ,
             prvOrgName :  string ,
             prvOrgLicenseNumber :  string ,
             govOrgCategoryName :  string ,
             prvOrgCategoryName :  string ,
             specialtyName :  string ,
             approvedReportUrl :  string ,
             doctorDaySchedule : [
              {
                 from : "2022-08-18T12:48:15.115Z",
                 to : "2022-08-18T12:48:15.115Z",
                 totalHours : number,
                 day : string|number
              }
            ],
             totalWeeklyHours : 0,
             approvalDuration : 0,
             reqStatus : 0
          }
        ]
    }
  }
  export interface PracticeReportPDF{
    data: {
        pdfUrl:string
      }
  }