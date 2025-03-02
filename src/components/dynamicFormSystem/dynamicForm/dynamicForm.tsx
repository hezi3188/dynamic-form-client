import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { getFormById } from '../../../utils/schemaUtils';
import { FormsList } from '../../../models/enums/formsList';
import { useStyles } from './dynamicFormStyles';
import { generateValidationSchema } from '../../../utils/validationSchemaUtils';
import {
  BUTTON_RESET,
  BUTTON_SUBMIT,
  SUBMIT_FORM_ERROR_MESSAGE,
  SUBMITTED_FORM_MESSAGE,
} from '../../../consts/strings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface FormValues {
  [key: string]: any;
}

interface Props {
  formId: FormsList;
}

const DynamicForm: React.FC<Props> = ({ formId }) => {
  const { classes } = useStyles();
  const schema = getFormById(formId)!;

  const validationSchema = Yup.object().shape(generateValidationSchema(schema));

  const initializeDefaultValues = (fields: any[]) => {
    return fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {} as FormValues);
  };

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: initializeDefaultValues(schema.fields),
  });

  useEffect(() => {
    reset();
  }, [schema, reset]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      Object.keys(data).forEach((key) => (data[key] = data[key].toString()));
      const payload = {
        formId: formId.toString(),
        fields: data,
      };
      const response = await axios.post(import.meta.env.VITE_API_URL, payload);
      if (response.status === 201) {
        toast.success(SUBMITTED_FORM_MESSAGE);
        reset();
      }
    } catch (error) {
      toast.error(SUBMIT_FORM_ERROR_MESSAGE);
    }
  };

  return (
    <div className={classes.root}>
      <ToastContainer />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={classes.title}>{schema.title}</h1>
        {schema.fields.map((field) => (
          <div className={classes.field} key={field.name}>
            {field.type !== 'select' ? (
              <TextField
                fullWidth
                label={field.label}
                type={field.type}
                {...register(field.name)}
                error={!!errors[field.name]}
                slotProps={{
                  inputLabel: {
                    shrink: field.type === 'date' ? true : undefined,
                  },
                }}
                helperText={
                  (field.errorMessage && !!errors[field.name]
                    ? field.errorMessage
                    : null) ||
                  (errors[field.name]?.message as string | undefined)
                }
              />
            ) : (
              <FormControl fullWidth error={!!errors[field.name]}>
                <InputLabel>{field.label}</InputLabel>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: controllerField }) => (
                    <Select {...controllerField} label={field.label}>
                      {field.options?.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText>
                  {(field.errorMessage && !!errors[field.name]
                    ? field.errorMessage
                    : null) ||
                    (errors[field.name]?.message as string | undefined)}
                </FormHelperText>
              </FormControl>
            )}
          </div>
        ))}
        <div className={classes.buttons}>
          <Button onClick={() => reset()} variant="outlined" color="secondary">
            {BUTTON_RESET}
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {BUTTON_SUBMIT}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
