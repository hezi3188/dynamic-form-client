export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'date' | 'number' | 'select';
  required: boolean;
  errorMessage?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  options?: string[];
}
