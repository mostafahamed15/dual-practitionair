
import * as Yup from 'yup';
import translate from "../locales/ar/translation.json"
import { Status } from "../../core/enums/Enum";
import { createEditOrderPath, waitingOrderPath, cancelOrderPath,rejectOrderPath ,acceptOrderPath } from "../../routes/Paths";


export const PrivateHomeValidation = ( required: string, id?: string,) => Yup.object().shape({
    [`${required}`] : Yup.string().required(translate.errors.required),
    [`${id}`] : Yup.string().min(10, translate.errors.length).max(10, translate.errors.length).required(translate.errors.required),
});
export const variant = (status:string): string => {
    if (status === Status.ACCEPTED) return "outline-primary";
    else if (status === Status.CANCELLED  ) return "outline-danger";
    else if (status === Status.NEW) return "outline-secondary";
    else if (status === Status.Waiting) return "outline-info";
    else if (status === Status.Rejected) return "outline-reject";
    else return "outline-gray-800";
  };
  
  export const navigationPath = (status:string): string => {
    if (status === Status.ACCEPTED) return acceptOrderPath();
    else if (status === Status.CANCELLED) return cancelOrderPath();
    else if (status === Status.NEW) return createEditOrderPath();
    else if (status === Status.Rejected) return rejectOrderPath();
    else if (status === Status.Waiting) return waitingOrderPath();
    else return "#";
  };