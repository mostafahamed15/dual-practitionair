let initialState: any = {
  id: '',
  serviceCode: '',
  status: '',
  orgType: '',
  info: {
    practitionerInfo: {
      fullNameAr: '',
      fullNameEn: '',
      specialityCode: '',
      specialityAr: '',
      specialityEn: '',
      scfhsRegistrationNumber: '',
      scfhsRegistrationExpiryDate: '',
      licenseNumber: '',
      licenseExpiryDate: '',
      gender: '',
      dateOfBirthH: '',
      dateOfBirthG: '',
      scfhsCategoryAr: '',
      scfhsCategoryEn: '',
    },
    privateEstablishmentInfo: {
      organizationId: 0,
      privateUserId: 0,
      nameAr: '',
      nameEn: '',
      establishmentTypeAr: '',
      establishmentTypeEn: '',
      cityAr: '',
      cityEn: '',
      cityId: 0,
      regionAr: '',
      regionEn: '',
      regionId: 0,
      licenseNumber: '',
      licenseExpiryDate: '',
      administrationNameAr: '',
      administrationNameEn: '',
    },
    govEstablishmentInfo: {
      sehaOrganizationId: 0,
      nameAr: '',
      nameEn: '',
      facilitySector: '',
      approvalLevel: 0,
      sehaOrganizationIdLevel2: 0,
      clusterId: '',
      managementAreaId: 0,
      cityId: 0,
      regionId: 0,
    },
  },
};
export default function UserReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'PRIVATE':
      return {
        ...state,
        orgType: 'PRIVATE',
      };
    case 'GOVERNMENT':
      return {
        ...state,
        orgType: 'GOVERNMENT',
      };
    case 'SEARCH':
      return {
        ...state,
        id: action.payload,
      };
    case 'GET_SERVICE_CODE':
      return {
        ...state,
        serviceCode: action.payload,
      };
    case 'GET_STATUS':
      return {
        ...state,
        status: action.payload,
      };
    case 'GET_PRACTITIONAIR':
      return {
        ...state,
        id: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
