import translate from "../../core/locales/ar/translation.json";
import { doctorDaySchedule } from "../../core/types/Types";
interface WorkScheduleProps{
  workSchedule?:any
}
export default function WorkSchedule({workSchedule}:WorkScheduleProps) {
  const translation = translate.privateFacility.acceptOrder.workschedule;
  const getDay=(day:number)=>{
   switch (day) {
      case 1:
        return "الأحد";
        case 2:
          return "الإثنين";
          case 3:
        return "الثلاثاء";
        case 4:
        return "الأربعاء";
        case 5:
        return "الخميس";
        case 6:
        return "الجمعة";
        case 7:
        return "السبت";
        default:
          return "لا يوجد"
      }
  }
  return (
    <div>
      <h5 className="text-secondary pb-3 pt-5 fw-bold text-center">
        {translation.title}
      </h5>
      <div className="d-flex justify-content-between text-center">
        {workSchedule?.map((item:any, index:number) => {
          return (
            <div
              key={index}
              className={`d-flex flex-column px-5 py-3 `}
            >
              <strong>{getDay(item.day)}</strong>
              <p className="pt-4 "> pm {item.from.split('T')[1]}-{item.to.split('T')[1]} am</p>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}
