export interface FormSubmission {
  id: string;
  formId: string;
  createdAt: string;
  fields: { [key: string]: string };
}
