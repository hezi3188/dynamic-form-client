import {
  DEFAULT_NUMBER_MAX,
  DEFAULT_NUMBER_MIN,
  DEFAULT_PASSWORD_MAX_LENGTH,
  DEFAULT_PASSWORD_MIN_LENGTH,
  DEFAULT_TEXT_MAX_LENGTH,
  DEFAULT_TEXT_MIN_LENGTH,
} from '../consts/numbers';
import {
  DATE_MESSAGE,
  EMAIL_MESSAGE,
  MAX_LENGTH_MESSAGE,
  MAX_NUMBER_MESSAGE,
  MIN_LENGTH_MESSAGE,
  MIN_NUMBER_MESSAGE,
  NUMBER_MESSAGE,
  REGEX_MESSAGE,
  REQUIRED_MESSAGE,
  SELECT_MESSAGE,
} from '../consts/strings';
import { FormSchema } from '../models/interfaces/formSchema';
import * as Yup from 'yup';

export const generateValidationSchema = (schema: FormSchema) => {
  const validationSchemaFields: { [key: string]: Yup.AnySchema } = {};

  schema.fields.forEach((field) => {
    let validator: Yup.AnySchema;
    const requiredValidation = field.required ? REQUIRED_MESSAGE : undefined;

    const regexValidation = field.pattern
      ? Yup.string().matches(new RegExp(field.pattern), REGEX_MESSAGE)
      : null;

    switch (field.type) {
      case 'email':
        validator = Yup.string()
          .email(EMAIL_MESSAGE)
          .required(requiredValidation);
        break;

      case 'password':
        if (field.pattern) {
          validator = regexValidation as Yup.StringSchema<string>;
        } else {
          validator = Yup.string()
            .required(requiredValidation)
            .min(
              field.minLength || DEFAULT_PASSWORD_MIN_LENGTH,
              `${MIN_LENGTH_MESSAGE} ${
                field.minLength || DEFAULT_PASSWORD_MIN_LENGTH
              }`
            )
            .max(
              field.maxLength || DEFAULT_PASSWORD_MAX_LENGTH,
              `${MAX_LENGTH_MESSAGE} ${
                field.maxLength || DEFAULT_PASSWORD_MAX_LENGTH
              }`
            );
        }
        break;

      case 'text':
        if (field.pattern) {
          validator = regexValidation as Yup.StringSchema<string>;
        } else {
          validator = Yup.string()
            .required(requiredValidation)
            .min(
              field.minLength || DEFAULT_TEXT_MIN_LENGTH,
              `${MIN_LENGTH_MESSAGE} ${
                field.minLength || DEFAULT_TEXT_MIN_LENGTH
              }`
            )
            .max(
              field.maxLength || DEFAULT_TEXT_MAX_LENGTH,
              `${MAX_LENGTH_MESSAGE} ${
                field.maxLength || DEFAULT_TEXT_MAX_LENGTH
              }`
            );
        }
        break;

      case 'number':
        if (field.pattern) {
          validator = regexValidation as Yup.StringSchema<string>;
        } else {
          validator = Yup.number()
            .required(requiredValidation)
            .typeError(NUMBER_MESSAGE)
            .min(
              field.min || DEFAULT_NUMBER_MIN,
              `${MIN_NUMBER_MESSAGE} ${field.min}`
            )
            .max(
              field.max || DEFAULT_NUMBER_MAX,
              `${MAX_NUMBER_MESSAGE} ${field.max}`
            );
        }
        break;

      case 'date':
        validator = Yup.date()
          .required(requiredValidation)
          .typeError(DATE_MESSAGE);
        break;

      case 'select':
        validator = Yup.string()
          .required(requiredValidation)
          .oneOf(field.options || [], SELECT_MESSAGE);
        break;

      default:
        validator = Yup.string();
    }

    validationSchemaFields[field.name] = validator;
  });
  return validationSchemaFields;
};
