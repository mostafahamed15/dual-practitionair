import OrderInfo from "../../../components/order-info";
import { organizationInfo, privatePersonInfo } from "../../../core/data/Data";
import translate from "../../../core/locales/ar/translation.json";
import { Button, Container } from "react-bootstrap";
import ModalPopup from "../../../components/modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { privateHomePath } from "../../../routes/Paths";
import DayTimePicker from "../../../components/day-time-picker";
import WorkHours from "../../../components/work-hours";
import { getPracticeInfo } from "../../../networking/practitioner";
import { dayHours } from "../../../core/types/Types";

export default function PreviewOrder() {
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);
  const [sumHours, setSumHours] = useState<dayHours>();

  const pullSumHours = (sum: dayHours) => {
    setSumHours(sum);
  };

  useEffect(() => {
    getPracticeInfo()
      .then((response) => {
        let data = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="d-flex flex-column ">
      <h4 className="text-secondary pb-1 pt-5 fw-bold text-center">
        {translate.governmenFacility.previewOrder.title}
      </h4>
      <OrderInfo
        organizationInfo={organizationInfo}
        personInfo={privatePersonInfo}
      />
      <div className="d-flex flex-row justify-content-center">
        {Object.values(translate.days).map((day: string, index: number) => (
          <DayTimePicker key={index} day={day} sumHours={pullSumHours} />
        ))}
      </div>
      <WorkHours hours={sumHours} />
      <Container>
        <h4 className="text-secondary  text-center mb-5">
          {translate.endorsement.title}
        </h4>
        <div className="d-flex align-items-start">
          <input
            type="checkbox"
            className="ms-4"
            onChange={() => setChecked(!checked)}
          />
          <ul className="border border-gray-200 py-5 px-4 rounded">
            {translate.endorsement.listitems.map(
              (item: string, index: number) => (
                <li className="text-secondary pe-3" key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </Container>
      <hr className="text-gray-700 my-5 w-100" />
      <div className="d-flex justify-content-center w-50 mb-4 m-auto">
        <Button
          variant="primary"
          disabled={!checked}
          className="text-white rounded-pill fw-bold py-2 w-25 ms-3"
          onClick={() => setPreviewModal(true)}
        >
          {translate.governmenFacility.previewOrder.sendOrder}
        </Button>
        <Button
          variant="secondary"
          className="text-white rounded-pill fw-bold py-2 w-25"
          onClick={() => navigate(privateHomePath())}
        >
          {translate.governmenFacility.previewOrder.cancel}
        </Button>
      </div>
      <p className="text-secondary p-5 text-center">{translate.copyRight}</p>

      <ModalPopup
        show={previewModal}
        handleClose={() => setPreviewModal(false)}
        confirmMessage={translate.modal.sendConfirm}
      />
    </div>
  );
}
