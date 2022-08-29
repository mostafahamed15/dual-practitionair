import { useState, useEffect } from 'react';
import { times } from '../../core/data/Data';
import translate from '../../core/locales/ar/translation.json';
import Styles from './styles.module.scss';

interface DayTimePickerProps {
  day: string;
  sumHours: (sum: any) => void;
  handleClick: (day: any) => void;
}

export default function DayTimePicker({
  day,
  sumHours,
  handleClick,
}: DayTimePickerProps) {
  const [starthours, setStartHours] = useState(0);
  const [endhours, setEndHours] = useState(0);

  const [checked, setChecked] = useState<boolean>(false);
  const [sum, setSum] = useState({ day: day, sum: 0 ,checked:false });
  const handelefromChange = (e: any) => {
    let time = e.target.value.split(' ');
    const [hoursPart, minutesPart] = time[0].split(':');
    let hours = Number(hoursPart) + Number(minutesPart) / 60;
    setStartHours(hours);
  };

  const handeletoChange = (e: any) => {
    let time = e.target.value.split(' ');
    const [hoursPart, minutesPart] = time[0].split(':');
    let hours = Number(hoursPart) + Number(minutesPart) / 60;
    setEndHours(hours);
  };

  useEffect(() => {
    setSum({ day: day, sum: 0 ,checked:false});
    if (starthours != 0 && endhours != 0) {
      let start = starthours < 8 ? starthours + 12 : starthours;
      let end = endhours < 8 ? endhours + 12 : endhours;
      setSum({ day: day, sum: (end>start?end - start: start-end ) ,checked:true });
     }
  }, [starthours, endhours]);
  sumHours(sum);
  return (
    <div className="d-flex flex-column ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <label className={`${Styles.checkbox} text-secondary fw-bold small`}>
          <input
            className={`ms-2 ${day}`}
            type="checkbox"

            onChange={(e) => {handleClick(e.target.checked)
            setChecked(!checked)
            sumHours({...sum,checked:!checked})

            }}
          />
          {day}
        </label>
        <div className="d-flex flex-column justify-content-center align-items-center bg-gray-200 border border-1 border-gray-700 rounded mt-1 mx-3 px-2 py-3 h-50">
          <div className="d-flex text-secondary align-items-center mt-3">
            <p>{translate.daytimepicker.from}</p>

            <select className={`${Styles.select}`} onChange={handelefromChange} disabled={!checked}>

              <option>{translate.daytimepicker.choose}</option>
              {times.map((time: string, index: number) => (
                <option
                  key={index}
                  dir="ltr"
                  value={time}
                  className="text-center"
                >
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex text-secondary mb-2">
            <p>{translate.daytimepicker.to}</p>

            <select className={`${Styles.select}`} onChange={handeletoChange} disabled={!checked}>
         <option>{translate.daytimepicker.choose}</option>
              {times.map((time: string, index: number) => (
                <option
                  key={index}
                  dir="ltr"
                  value={time}
                  className="text-center"
                >
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
