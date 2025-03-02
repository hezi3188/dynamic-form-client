import { useState } from 'react';
import CustomDrawer from './customDrawer/customDrawer';
import CustomNavigation from './customNavigation/customNavigation';
import { useStyles } from './dynamicFormSystemStyle';
import ListForms from './listForms/listForms';
import DynamicForm from './dynamicForm/dynamicForm';
import { SystemMode } from '../../models/enums/systemMode';
import { FormsList } from '../../models/enums/formsList';

const DynamicFormSystem = () => {
  const { classes } = useStyles();

  const [systemMode, setSystemMode] = useState(SystemMode.CREATE);
  const [selectedFormId, setSelectedFormId] = useState(FormsList.REGISTRATION);

  return (
    <div className={classes.root}>
      <CustomDrawer
        selectedFormId={selectedFormId}
        setSelectedFormId={setSelectedFormId}
      />
      <div className={classes.content}>
        <CustomNavigation
          systemMode={systemMode}
          setSystemMode={setSystemMode}
        />
        {systemMode === SystemMode.LIST ? (
          <ListForms formId={selectedFormId} />
        ) : (
          <DynamicForm formId={selectedFormId} />
        )}
      </div>
    </div>
  );
};

export default DynamicFormSystem;
