export interface FormSubmission {
  _id: string;
  createdAt: string;
  fields: { [key: string]: string };
}
