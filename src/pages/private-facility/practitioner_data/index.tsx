import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataBox from "../../../components/data-box";
import { practitionerData } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { previewOrderPath } from "../../../routes/Paths";
import Styles from "./styles.module.scss";

export default function PractitionerData() {
  const [checked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="pt-4">
      <strong className="text-secondary m-4 h4">
        {translate.privateFacility.home.title}
      </strong>
      <h4 className="text-secondary mt-5 mb-3 text-center">
        {translate.privateFacility.practitionerData.practitionerData}
      </h4>
      <DataBox data={practitionerData} />
      <div className="d-flex flex-column align-items-center">
        <label
          className={`${Styles.checkbox} text-gray-700 fw-bold small`}
          htmlFor="confirm"
        >
          <input
            className="ms-2"
            type="checkbox"
            id="confirm"
            onChange={() => setChecked(!checked)}
          />
          {translate.privateFacility.practitionerData.confirm}
        </label>
        <hr className="text-gray-700 w-100" />
        <Button
          className="text-white px-5 rounded-pill fw-bold my-3"
          disabled={!checked}
          onClick={() => navigate(previewOrderPath())}
        >
          {translate.privateFacility.practitionerData.continue}
        </Button>
      </div>
    </div>
  );
}
