import translate from "../../core/locales/ar/translation.json";
function WorkSchedule() {
  const translation = translate.privateFacility.acceptOrder.workschedule;
return (
    <div>
      <h5 className="text-secondary pb-3 pt-5 fw-bold text-center">
        {translation.title}
      </h5>
      <div className="d-flex justify-content-between text-center">
        {translation.schedule.map((item,index) => {
          return (
            <div key={index} className={`d-flex flex-column px-5 py-3 ${item.text_color}`}>
              <strong>{item.day}</strong>
              <p className="pt-4">{item.time}</p>
            </div>
          );
        })}
       
      </div>
   
    </div>
  );
}

export default WorkSchedule;
