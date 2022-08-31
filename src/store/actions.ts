export const privateFacility = () => {
  return {
    type: 'PRIVATE',
    payload: 'PRIVATE',
  };
};

export const governmentFacility = () => {
  return {
    type: 'GOVERNMENT',
    paylaod: 'GOVERNMENT',
  };
};

export const nationalIdSearch = (id: string) => {
  return {
    type: 'SEARCH',
    payload: id,
  };
};

export const getServiceCode = (code: string) => {
  return {
    type: 'GET_SERVICE_CODE',
    payload: code,
  };
};

export const getStatus = (status: string) => {
  return {
    type: 'GET_STATUS',
    payload: status,
  };
};

export const getPractitionair = (info: any) => {
  return {
    type: 'GET_PRACTITIONAIR',
    payload: info,
  };
};
