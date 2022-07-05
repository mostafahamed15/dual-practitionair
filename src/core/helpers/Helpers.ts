
import * as Yup from 'yup';
import translate from "../locales/ar/translation.json"

export const PrivateHomeValidation = ( required: string, id?: string,) => Yup.object().shape({
    [`${required}`] : Yup.string().required(translate.errors.required),
    [`${id}`] : Yup.string().min(10, translate.errors.length).max(10, translate.errors.length).required(translate.errors.required),
});