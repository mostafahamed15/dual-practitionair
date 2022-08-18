import Table from "../../../components/table";
import translate from "../../../core/locales/ar/translation.json";
import { governmentTableTitles, governmentTableRows } from "../../../core/data/Data";
import GovernmentTable from "../../../components/government-table";
import { useEffect } from "react";
import { getGovernmentDataLevel1, getGovernmentDataLevel2 } from "../../../networking/governmentOrgApis";

export default function GovernmentHome() {

useEffect(()=>{
getGovernmentDataLevel1()
.then((response) => {
  let data=response.data
   console.log(data);
})
.catch((e) => {
  console.log(e);
})


},[])

  return (
    <div className="bg-gray-200 py-4 px-5 vh-100 pt-5">
      <div className="bg-white pt-3">
        <strong className="text-secondary m-4 h4">
          {translate.privateFacility.home.title}
        </strong>
        <hr className="text-gray-400" />
        <GovernmentTable titles={governmentTableTitles} rows={governmentTableRows}   />
      </div>
    </div>
  );
}
