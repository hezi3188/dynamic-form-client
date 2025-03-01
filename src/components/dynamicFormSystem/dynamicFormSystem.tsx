import { useState } from 'react';
import CustomDrawer from './customDrawer/customDrawer';
import CustomNavigation from './customNavigation/customNavigation';
import { useStyles } from './dynamicFormSystemStyle';
import ListForms from './listForms/listForms';
import DynamicForm from './dynamicForm/dynamicForm';
import { SystemMode } from '../../models/enums/systemMode';
import { DynamicSystemContext } from '../../context/dynamicSystemContext';

const DynamicFormSystem = () => {
  const { classes } = useStyles();

  const [systemMode, setSystemMode] = useState(SystemMode.LIST);

  return (
    <DynamicSystemContext.Provider value={{ systemMode, setSystemMode }}>
      <div className={classes.root}>
        <CustomDrawer />
        <div className={classes.content}>
          <CustomNavigation />
          {systemMode === SystemMode.LIST ? <ListForms /> : <DynamicForm />}
        </div>
      </div>
    </DynamicSystemContext.Provider>
  );
};

export default DynamicFormSystem;
