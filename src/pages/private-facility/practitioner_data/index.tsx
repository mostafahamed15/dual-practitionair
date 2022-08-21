import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataBox from "../../../components/data-box";
import translate from "../../../core/locales/ar/translation.json";
import { getPracticeInfo } from "../../../networking/practitioner";
import { previewOrderPath } from "../../../routes/Paths";
export default function PractitionerData() {
 const navigate = useNavigate();
 const [practiceInfo,setPracticeInfo]=useState({})
 useEffect(()=>{
  getPracticeInfo()
   .then((response) => {
     let data=response.data.data
    console.log(response.data);
    let {cityAr,nameAr}=data.privateEstablishmentInfo
    let {fullNameAr ,scfhsCategoryAr}=data.practitionerInfo
    setPracticeInfo({
      practitionerName:  fullNameAr,
    practitionerId: translate.privateFacility.practitionerData.practitionerId,
    practitionerCategory:scfhsCategoryAr,
    nationallity: translate.privateFacility.practitionerData.nationallity,
    privateHealthFacility:translate.privateFacility.practitionerData.privateHealthFacility,
    city:cityAr,
    workName:nameAr
    })
})
   .catch((e) => {
     console.log(e);
   })
},[])

 console.log(practiceInfo);
       
  return (
    <div className="pt-4">
     <h4 className="text-secondary mt-5 mb-3 text-center">
        {translate.privateFacility.practitionerData.practitionerData}
      </h4>
      <DataBox data={practiceInfo} />
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
