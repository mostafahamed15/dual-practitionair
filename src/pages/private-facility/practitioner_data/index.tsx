import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataBox from "../../../components/data-box";
import { practitionerData } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { previewOrderPath } from "../../../routes/Paths";

export default function PractitionerData() {
 const navigate = useNavigate();
  return (
    <div className="pt-4">
     <h4 className="text-secondary mt-5 mb-3 text-center">
        {translate.privateFacility.practitionerData.practitionerData}
      </h4>
      <DataBox data={practitionerData} />
      <div className="d-flex flex-column align-items-center">
       <Button
       variant="secondary"
          className="text-white px-5 rounded-pill fw-bold my-5"
          onClick={() => navigate(previewOrderPath())}
        >
          {translate.privateFacility.practitionerData.continue}
        </Button>
        <p className="text-secondary my-5">{translate.copyRight}</p>
      </div>
    </div>
  );
}
