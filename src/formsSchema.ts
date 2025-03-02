import { FormsList } from './models/enums/formsList';
import { FormSchema } from './models/interfaces/formSchema';

export const formsSchema: FormSchema[] = [
  {
    id: FormsList.REGISTRATION,
    title: 'רישום משתמש',
    fields: [
      {
        type: 'number',
        name: 'id',
        label: 'תעודת זהות',
        required: true,
        pattern: '^[0-9]{9}$',
        errorMessage: 'תעודת זהות חייבת להכיל 9 ספרות בלבד',
      },
      {
        name: 'name',
        label: 'שם ',
        type: 'text',
        required: true,
        minLength: 2,
      },
      { name: 'email', label: 'אימייל', type: 'email', required: true },
      {
        name: 'password',
        label: 'סיסמה',
        type: 'password',
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$',
        required: true,
        errorMessage:
          'הסיסמה חייבת להכיל לפחות 8 תווים, אות גדולה, אות קטנה ומספר',
      },
      {
        name: 'date',
        label: 'תאריך לידה',
        type: 'date',
        required: true,
      },
      {
        name: 'gender',
        label: 'מין',
        type: 'select',
        options: ['זכר', 'נקבה'],
        required: true,
      },
    ],
  },
  {
    id: FormsList.ADD_CAR,
    title: 'הוספת רכב',
    fields: [
      {
        name: 'carNumber',
        label: 'מספר רכב',
        type: 'number',
        required: true,
        min: 1000000,
        max: 9999999,
      },
      {
        name: 'manufacturer',
        label: 'יצרן',
        type: 'text',
        required: true,
        minLength: 2,
      },
      {
        name: 'model',
        label: 'דגם',
        type: 'text',
        required: true,
        minLength: 1,
      },
      {
        name: 'year',
        label: 'שנת ייצור',
        type: 'number',
        required: true,
        min: 1900,
        max: new Date().getFullYear(),
      },
      {
        name: 'color',
        label: 'צבע',
        type: 'text',
        required: true,
        minLength: 2,
      },
    ],
  },
  {
    id: FormsList.ADD_EMPLOYEE,
    title: 'הוספת עובד',
    fields: [
      {
        name: 'id',
        label: 'תעודת זהות',
        type: 'number',
        required: true,
        min: 100000000,
        max: 999999999,
      },
      {
        name: 'name',
        label: 'שם פרטי',
        type: 'text',
        required: true,
        minLength: 2,
      },
      {
        name: 'family',
        label: 'שם משפחה',
        type: 'text',
        required: true,
        minLength: 2,
      },
      {
        name: 'email',
        label: 'אימייל',
        type: 'email',
        required: true,
      },
      {
        name: 'date',
        label: 'תאריך לידה',
        type: 'date',
        required: true,
      },
      {
        name: 'role',
        label: 'תפקיד',
        type: 'text',
        required: true,
        minLength: 2,
      },
    ],
  },
];
