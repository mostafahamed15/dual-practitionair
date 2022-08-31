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
export type PractitionerInfo = {
  practitionerName: string;
  practitionerId: string;
  practitionerClass: string;
  nationallity: string;
  privateHealthFacility: string;
  city: string;
  workName: string;
};
export type dayHours = {
  day: string, 
  sum: number,
  checked:boolean
};
export type workHours = {
  sum: number,
  period:number
};
export type doctorDaySchedule =[
  {
    from: string,
    to: string,
    day: number,
    totalHours:number }]
export type  rejectDetail={
      rejectorg:string,
      rejectDate:string,
      rejectReason:string
    }