import { formsSchema } from '../formsSchema';
import { FormsList } from '../models/enums/formsList';

export const getFormsNamesWithIds = () => {
  return formsSchema.map((form) => ({ title: form.title, id: form.id }));
};

export const getFormById = (id: FormsList) => {
  return formsSchema.find((form) => form.id === id);
};
