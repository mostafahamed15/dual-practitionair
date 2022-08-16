export type PersonInfo = {
  name: string;
  specialization: string;
  specializationId: number;
  specializationEndDate: string;
  startEndAcceptDate?: string;
  acceptPeriod?: string;
  orgName: string;
  maxHours?: string;
};

export type OrganizationInfo = {
  orgName: string;
  type: string;
  city: string;
  orgId: number;
  expDate: string;
  governorate: string;
};
export type practitionerData = {
  practitionerName: string;
  practitionerId: string;
  practitionerClass: string;
  nationallity: string;
  privateHealthFacility: string;
  city: string;
  workName: string;

};
