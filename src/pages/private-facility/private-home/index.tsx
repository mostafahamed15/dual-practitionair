import { useEffect, useState } from "react";
import Table from "../../../components/table";
import translate from "../../../core/locales/ar/translation.json";
import { dummyTitles, dummyRows } from "../../../core/data/Data";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import Styles from "./styles.module.scss";
import { PrivateHomeValidation } from "../../../core/helpers/Helpers";
import { useNavigate } from "react-router-dom";
import { practitionerDataPath } from "../../../routes/Paths";
import { getPrivateOrgData } from "../../../networking/privateOrgApis";
export default function PrivateHome() {
  const [privateTableRows,setPrivateTableRows]=useState<any>([])
  const [idError, setIdError] = useState<boolean>(false);
  const [birthError, setBirthError] = useState<boolean>(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      nationalId: "",
      birthDate: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: PrivateHomeValidation("birthDate", "nationalId"),
  });
useEffect(()=>{
   getPrivateOrgData()
    .then((response) => {
      let data=response.data
      setPrivateTableRows(data)
       console.log(data);
    })
    .catch((e) => {
      console.log(e);
    })
},[])
  return (
    <div className="vh-100 pt-4">
      <strong className="text-secondary m-4 h4">
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
                <strong>{translate.privateFacility.home.idNumber}</strong>
                <input
                  id="nationalId"
                  className={`py-2 px-3 m-1 rounded-pill border ${
                    idError ? " border-danger" : "border-gray-400"
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
              <input
                id="birthDate"
                className={`py-2 px-3 m-1 rounded-pill border ${
                  birthError ? " border-danger" : "border-gray-400"
                } ${Styles.input} ${Styles.datepicker}`}
                max="2999-12-31"
                type="text"
                value={formik.values.birthDate}
                onChange={formik.handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  e.target.type = "text";
                  formik.errors.birthDate
                    ? setBirthError(true)
                    : setBirthError(false);
                }}
                placeholder={translate.privateFacility.home.birthDate}
              ></input>
              {birthError && (
                <p
                  className={`text-danger small position-absolute mx-3 ${Styles.error}`}
                >
                  {formik.errors.birthDate}
                </p>
              )}
            </div>
            <Button
              disabled={!(formik.isValid && formik.dirty)}
              className="text-white font-weight-bold rounded-pill px-5 my-1 mx-5"
              type="submit"
              onClick={() => navigate(practitionerDataPath())}
            >
              <strong>{translate.privateFacility.home.check}</strong>
            </Button>
          </form>
        </div>
      </div>
      <div className="bg-gray-200 h-75 py-4 px-5">
        <div className="bg-white pt-1">
          <h5 className="text-secondary font-weight-bold m-3 mb-4">
            {translate.privateFacility.home.ordersStatus}
          </h5>
          <hr className="text-gray-400" />
          <Table titles={dummyTitles} rows={privateTableRows} />
        </div>
      </div>
    </div>
  );
}
