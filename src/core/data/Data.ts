export const dummyTitles: string[] = [
  'رقم الطلب',
  'رقم الهوية',
  'الاسم الكامل (عربي)',
  'جهة عمل الممارس',
  'تاريخ تقديم الطلب',
  'حالة الطلب',
];

export const dummyRows = [
  {
    orderNumber: 2020,
    idNumber: 2321363789,
    fullName: 'عبد الله عبد الرحمن عبد العزيز',
    applicant: 'مستشفى الحمادي',
    date: ' 15/06/2022',
    status: 'في انتظار دفع الرسوم',
  },
  {
    orderNumber: 2018,
    idNumber: 2398756,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 11/06/2022',
    status: 'مقبول',
  },
  {
    orderNumber: 2020,
    idNumber: 2321363789,
    fullName: 'عبد الله عبد الرحمن عبد العزيز',
    applicant: 'مستشفى الحمادي',
    date: ' 15/06/2022',
    status: 'منتهي',
  },
  {
    orderNumber: 2019,
    idNumber: 2324587996,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دار الشفاء',
    date: ' 14/06/2022',
    status: 'ملغي',
  },
  {
    orderNumber: 2018,
    idNumber: 232645656,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 13/06/2022',
    status: 'في انتظار دفع الرسوم',
  },
  {
    orderNumber: 2018,
    idNumber: 2398756,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 11/06/2022',
    status: 'طلب مرفوض من قبل الممارس',
  },
];
export const governmentTableTitles: string[] = [
  'رقم الطلب',
  'رقم الهوية',
  'الاسم الكامل (عربي)',
  'الجهة مقدمة الطلب',
  'تاريخ تقديم الطلب',
  'عدد الساعات الأسبوعية',
  'حالة الطلب',
];
export const governmentTableRows = [
  {
    orderNumber: 2020,
    idNumber: 2321363789,
    fullName: 'عبد الله عبد الرحمن عبد العزيز',
    applicant: 'مستشفى الحمادي',
    date: ' 15/06/2022',
    hours:'16',
    status: 'طلب جديد',
    },
  {
    orderNumber: 2018,
    idNumber: 232645656,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 13/06/2022',
    hours:'14',
    status: 'ملغي',
  },
  {
    orderNumber: 2019,
    idNumber: 2324587996,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دار الشفاء',
    date: ' 14/06/2022',
    hours:'12',
    status: 'مقبول',
  },
  {
    orderNumber: 2018,
    idNumber: 2398756,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 12/06/2022',
    hours:'11',
    status: 'مقبول',
  },
  {
    orderNumber: 2018,
    idNumber: 2398756,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 18/06/2022',
    hours:'17',
    status: 'مقبول',
  },
  {
    orderNumber: 2018,
    idNumber: 2398756,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 19/06/2022',
    hours:'18',
    status: 'مقبول',
  },
  {
    orderNumber: 2018,
    idNumber: 2398756,
    fullName: 'محمد أحمد عبد الحميد',
    applicant: 'مستشفى دواء',
    date: ' 10/06/2022',
    hours:'13',
    status: 'مقبول',
  },
];
export const personInfo = {
  name: 'أحمد عبد العزيز',
  specialization: 'طبيب أسنان',
  specializationId: 29399942,
  specializationEndDate: '10/10/2023',
  orgName: 'مستشفي محطة جدة',
  startEndAcceptDate: '10/10/2020',
  acceptPeriod: '12شهر ',
  maxHours: '48 ساعة',
};

export const privatePersonInfo = {
  name: 'أحمد عبد العزيز',
  specialization: 'طبيب أسنان',
  specializationId: 29399942,
  specializationEndDate: '10/10/2023',
   orgName: 'مستشفي محطة جدة',
};
export const personInfoPreview = {
  name: 'أحمد عبد العزيز',
  specialization: 'طبيب أسنان',
  specializationId: 29399942,
  specializationEndDate: '10/10/2023',
  orgName: 'مستشفي محطة جدة',
  department: 'الدفاع',
};

export const organizationInfo = {
  orgName: 'مستشفي الحمادي',
  type: 'مستشفي',
  city: 'جدة',
  orgId: 399400239,
  expDate: '10/10/2023',
  governorate: 'المديزية العامةللشئون الصحية بمحافظة جدة',
};

export const practitionerData = {
  practitionerName: 'عبد الله عبد الرحمن عبد العزيز',
  practitionerId: 'سارية',
  practitionerClass: 'استشاري',
  nationallity: 'سعودي',
  privateHealthFacility: 'لديه رخصة سارية',
  city: ' الرياض ',
  workName: 'مستشفى الملك خالد',
 
};
export const rejectOrder={
  "rejectorg":"  عبد الله عبد العزيز" ,
  "rejectDate":" 01/01/2022 ",
  "rejectReason":"  الأوقات المحددة في الجدول غير مناسبة"
}
export const times = [
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];
