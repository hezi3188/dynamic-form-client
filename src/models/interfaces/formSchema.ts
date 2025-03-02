import { FormsList } from '../enums/formsList';
import { FormField } from './formFields';

export interface FormSchema {
  id: FormsList;
  title: string;
  fields: FormField[];
}
