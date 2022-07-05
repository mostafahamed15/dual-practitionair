import { times } from "../../core/data/Data";
import translate from "../../core/locales/ar/translation.json";
import Styles from "./styles.module.scss";

interface DayTimePickerProps {
  day: string;
}

export default function DayTimePicker({ day }: DayTimePickerProps) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <label className={`${Styles.checkbox} text-secondary fw-bold small`}>
        <input className="ms-2" type="checkbox" />
        {day}
      </label>
      <div className="d-flex flex-column justify-content-center align-items-center bg-gray-200 border border-1 border-gray-700 rounded mt-1 mx-3 px-2 py-3 h-50">
        <div className="d-flex text-secondary align-items-center mt-3">
          <p>{translate.daytimepicker.from}</p>
          <select className={`${Styles.select}`}>
            <option>{translate.daytimepicker.choose}</option>
            {times.map((time: string, index: number) => (
              <option
                key={index}
                dir="ltr"
                value={index}
                className="text-center"
              >
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex text-secondary mb-2">
          <p>{translate.daytimepicker.to}</p>
          <select className={`${Styles.select}`}>
            <option>{translate.daytimepicker.choose}</option>
            {times.map((time: string, index: number) => (
              <option
                key={index}
                dir="ltr"
                value={index}
                className="text-center"
              >
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
