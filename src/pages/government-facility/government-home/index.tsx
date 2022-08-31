import { useEffect, useState } from 'react';
import translate from '../../../core/locales/ar/translation.json';
import { governmentTableRows, governmentTableTitles } from '../../../core/data/Data';
import GovernmentTable from '../../../components/government-table';
import {
  getGovernmentDataLevel1,
  getGovernmentDataLevel2,
} from '../../../services/governmentOrgApis';
import { useDispatch } from 'react-redux';
import { governmentFacility } from '../../../store/actions';
export default function GovernmentHome() {
  const [govList, setGovList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const lookupStatusGov1 = {
    1: '',
    2: 'لا يظهر الطلب',
    3: 'طلب جديد',
    4: 'بإنتظار قبول المستوى الثاني في المنشأة الصحية الحكومية',
    5: 'بإنتظار قبول المنشأة الصحية الخاصة',
    6: '',
    7: 'الطلب مقبول',
    8: 'الطلب ملغي من المنشأة الصحية الخاصة',
    9: 'الطلب ملغي من المنشأة الصحية الحكومية',
    10: 'الطلب مرفوض من الممارس',
    11: 'الطلب مرفوض من المنشأة الصحية الخاصة',
    12: 'الطلب مرفوض من المنشأة الصحية الحكومية',
    13: 'الطلب مرفوض من المنشأة  الصحية الحكومية المستوى الثاني',
    14: 'الطلب منتهي',
    15: 'لا يظهر الطلب',
    16: '',
  };
  useEffect(() => {
    dispatch(governmentFacility());
    if (sessionStorage.getItem('re') === 'ddd') {
      if (localStorage.getItem('role') === '984') {
        getGovernmentDataLevel1()
          .then((response) => {
            let data = response.data.data.map((item: any) => {
              type ObjectKey = keyof typeof lookupStatusGov1;
              const myVar: ObjectKey = item.resquestStatus;
              return {
                orderNumber: item.reqServiceCode,
                idNumber: item.nationalId,
                fullName: item.requestingOrgName,
                applicant: item.practionerName,
                date: item.dateOfRequset,
                hours: item.totalWeeklyHours,
                status: lookupStatusGov1[myVar],
              };
            });
            setGovList(data);
            setLoading(false);
          })
          .catch((e) => {
            setLoading(false);
            setError(true);
            setErrorMessage(e?.response?.data?.message || 'Server Error');
          });
      } else {
        getGovernmentDataLevel2()
          .then((response) => {
            let data = response.data.data.map((item: any) => {
              type ObjectKey = keyof typeof lookupStatusGov1;
              const myVar: ObjectKey = item.resquestStatus;
              return {
                orderNumber: item.reqServiceCode,
                idNumber: item.nationalId,
                fullName: item.requestingOrgName,
                applicant: item.practionerName,
                date: item.dateOfRequset,
                hours: item.totalWeeklyHours,
                status: lookupStatusGov1[myVar],
              };
            });
            setGovList(data);
            setLoading(false);
          })
          .catch((e) => {
            setLoading(false);
            setError(true);
            setErrorMessage(e?.response?.data?.message || 'Server Error');
          });
      }
    } else {
      window.location.replace('https://seha.devclan.io');
    }
  }, []);

  return (
    <div className="bg-gray-200 py-4 px-5 vh-100 pt-5">
      <div className="bg-white pt-3">
        <strong className="text-secondary m-4 h4">
          {translate.privateFacility.home.title}
        </strong>
        <hr className="text-gray-400" />
        {loading ? (
          <h3>Loading..</h3>
        ) : error ? (
          <h6 style={{ color: 'red' }}>{errorMessage}</h6>
        ) : (
          <GovernmentTable titles={governmentTableTitles} rows={governmentTableRows} />
        )}
      </div>
    </div>
  );
}
