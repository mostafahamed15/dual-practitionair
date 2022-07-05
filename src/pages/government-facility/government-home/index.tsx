import Table from "../../../components/table";
import translate from "../../../core/locales/ar/translation.json";
import { dummyTitles, dummyRows } from "../../../core/data/Data";

export default function GovernmentHome() {
  return (
    <div className="bg-gray-200 py-4 px-5 vh-100 pt-5">
      <div className="bg-white pt-3">
        <strong className="text-secondary m-4 h4">
          {translate.privateFacility.home.title}
        </strong>
        <hr className="text-gray-400" />
        <Table titles={dummyTitles} rows={dummyRows} />
      </div>
    </div>
  );
}
