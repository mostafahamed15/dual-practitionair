import { useEffect, useState } from 'react';
import Table from '../../../components/table';
import translate from '../../../core/locales/ar/translation.json';
import { dummyTitles, dummyRows } from '../../../core/data/Data';
import { useFormik } from 'formik';
import { Button } from 'react-bootstrap';
import Styles from './styles.module.scss';
import { PrivateHomeValidation } from '../../../core/helpers/Helpers';
import { useNavigate } from 'react-router-dom';
import { practitionerDataPath } from '../../../routes/Paths';
import { getPrivateOrgData } from '../../../services/privateOrgApis';
import { useDispatch } from 'react-redux';
import {
  nationalIdSearch,
  privateFacility,
  getPractitionair,
} from '../../../store/actions';
import { getPracticeInfo } from '../../../services/practitioner';

export default function PrivateHome() {
  const [idError, setIdError] = useState<boolean>(false);
  const [privateList, setPrivateList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchError, setSearchError] = useState<any>(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lookupStatus = {
    1: '',
    2: 'بانتظار قبول الممارس',
    3: 'بإنتظار قبول المنشأة الصحية الحكومية',
    4: 'بإنتظار قبول المستوى الثاني في المنشأة الصحية الحكومية',
    5: 'بإنتظار دفع الرسوم',
    6: '',
    7: 'الطلب مقبول',
    8: 'الطلب ملغي من المنشأة الصحية الخاصة',
    9: 'الطلب ملغي من المنشأة الصحية الحكومية',
    10: 'الطلب مرفوض من الممارس',
    11: 'الطلب مرفوض من المنشأة الصحية الخاصة',
    12: 'الطلب مرفوض من المنشأة الصحية الحكومية',
    13: 'الطلب مرفوض من المنشأة  الصحية الحكومية المستوى الثاني',
    14: 'الطلب منتهي',
    15: 'طلب تجديد',
    16: '',
  };

  const formik = useFormik({
    initialValues: {
      nationalId: '',
      birthDate: '',
    },
    onSubmit: (values) => {
      dispatch(nationalIdSearch(values.nationalId));
      getPracticeInfo()
        .then((response) => {
          let data = response.data;
          dispatch(getPractitionair(data));
          navigate(practitionerDataPath());
          setSearchError(false);
        })
        .catch((e) => {
          // navigate(practitionerDataPath());
          setSearchError(true);
          setSearchErrorMessage(e?.response?.data?.message || 'Server Error');
        });
    },
    validationSchema: PrivateHomeValidation('nationalId'),
  });
  useEffect(() => {
    dispatch(privateFacility());
    //if (sessionStorage.getItem('re') === 'ddd') {
    getPrivateOrgData()
      .then((response) => {
        let data = response.data.data.map((item: any) => {
          type ObjectKey = keyof typeof lookupStatus;
          const myVar: ObjectKey = item.resquestStatus;
          return {
            orderNumber: item.reqServiceCode,
            idNumber: item.nationalId,
            fullName: item.practionerName,
            applicant: item.practionerMainOrgName,
            date: item.dateOfRequset,
            status: lookupStatus[myVar],
          };
        });
        setPrivateList(data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        setErrorMessage(e?.response?.data?.message || 'Server Error');
      });
    // } else {
    //   window.location.replace('https://seha.devclan.io');
    // }
  }, []);
  return (
    <div className="vh-100 pt-4">
      <strong className="text-secondary m-3 px-5 h4">
        {translate.privateFacility.home.title}
      </strong>
      <div className="h-25 pt-4">
        <div className="d-flex flex-column align-items-center">
          <form
            className="d-flex w-75 justify-content-center align-items-end"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label className="h-25 d-flex flex-column text-primary font-weight-bold small">
                <strong className="pe-3">
                  {translate.privateFacility.home.idNumber}
                </strong>
                <input
                  id="nationalId"
                  className={`py-2 px-3 m-1 rounded-pill border ${
                    idError ? ' border-danger' : 'border-gray-400'
                  } ${Styles.input}`}
                  type="number"
                  value={formik.values.nationalId}
                  onChange={formik.handleChange}
                  onBlur={() => {
                    formik.errors.nationalId
                      ? setIdError(true)
                      : setIdError(false);
                  }}
                  placeholder={translate.privateFacility.home.idNumber}
                ></input>
              </label>
              {idError && (
                <p
                  className={`text-danger small position-absolute mx-3 ${Styles.error}`}
                >
                  {formik.errors.nationalId}
                </p>
              )}
            </div>
            <div>
              <label className="h-25 d-flex flex-column text-primary font-weight-bold small">
                <strong className="pe-3">
                  {translate.privateFacility.home.birthDate}
                </strong>
                <input
                  id="birthDate"
                  className={`py-2 px-3 m-1 rounded-pill border  ${Styles.input} ${Styles.datepicker}`}
                  max="2999-12-31"
                  type="text"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  onFocus={(e) => (e.target.type = 'date')}
                  placeholder={translate.privateFacility.home.birthDate}
                ></input>
              </label>
            </div>
            <Button
              disabled={!(formik.isValid && formik.dirty)}
              className="text-white font-weight-bold rounded-pill py-2 px-5 my-1 mx-5"
              type="submit"
            >
              <strong>{translate.privateFacility.home.check}</strong>
            </Button>
          </form>
        </div>
        <h6 className="d-flex justify-content-center" style={{ color: 'red' }}>
          {searchError && searchErrorMessage}
        </h6>
      </div>
      <div className="bg-gray-200 h-75 py-4 px-5">
        <div className="bg-white pt-1">
          <h5 className="text-secondary font-weight-bold m-3 mb-4">
            {translate.privateFacility.home.ordersStatus}
          </h5>
          <hr className="text-gray-400" />
          {loading ? (
            <h3>Loading..</h3>
          ) : !error ? (
            <h6 style={{ color: 'red' }}>{errorMessage}</h6>
          ) : (
            <Table titles={dummyTitles} rows={dummyRows} />
          )}
        </div>
      </div>
    </div>
  );
}
