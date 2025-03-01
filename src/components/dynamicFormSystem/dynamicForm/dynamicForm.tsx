import { useStyles } from './dynamicFormStyles';

const DynamicForm = () => {
  const { classes } = useStyles();

  return <div className={classes.root}>add form</div>;
};

export default DynamicForm;
