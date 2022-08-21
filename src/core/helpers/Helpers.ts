
import * as Yup from 'yup';
import translate from "../locales/ar/translation.json"
import { Status } from "../../core/enums/Enum";
import { governmentAcceptOrderPath,createEditOrderPath, waitingOrderPath, cancelOrderPath,rejectOrderPath ,acceptOrderPath } from "../../routes/Paths";


export const PrivateHomeValidation = ( required: string, id?: string,) => Yup.object().shape({
    [`${required}`] : Yup.string().required(translate.errors.required),
    [`${id}`] : Yup.string().min(10, translate.errors.length).max(10, translate.errors.length).required(translate.errors.required),
});
export const privateBtnVariant = (status:string): string => {
    if (status === Status.ACCEPTED) return "outline-primary";
    else if (status === Status.CANCELLED  ) return "outline-danger";
    else if (status === Status.NEW) return "outline-secondary";
    else if (status === Status.Waiting) return "outline-info";
    else if (status === Status.Rejected) return "outline-reject";
    else return "outline-gray-800";
  };
  
  export const privateBtnNavigationPath = (status:string): string => {
    if (status === Status.ACCEPTED) return acceptOrderPath();
    else if (status === Status.CANCELLED) return cancelOrderPath();
    else if (status === Status.NEW) return createEditOrderPath();
    else if (status === Status.Rejected) return rejectOrderPath();
    else if (status === Status.Waiting) return waitingOrderPath();
    else return "#";
  };
  
  export const govBtnVariant = (status:string): string => {
    if (status === Status.ACCEPTED) return "outline-primary";
    else if (status === Status.CANCELLED  ) return "outline-danger";
    else if (status === Status.NEW) return "outline-secondary";
    else return "outline-gray-800";
  };

  export  const govBtnNavigationPath = (status:string): string => {
    if (status === Status.ACCEPTED) return governmentAcceptOrderPath();
    else if (status === Status.CANCELLED) return cancelOrderPath();
    else if (status === Status.NEW) return createEditOrderPath();
    else return "#";
  };
