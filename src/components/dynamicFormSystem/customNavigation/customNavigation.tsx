import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useStyles } from './customNavigationStyles';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useContext } from 'react';
import { DynamicSystemContext } from '../../../context/dynamicSystemContext';

const ADD_BUTTON_LABEL = ' הוסף טופס';
const LIST_BUTTON_LABEL = 'רשימת הטפסים';
const CustomNavigation = () => {
  const { classes } = useStyles();

  const { systemMode, setSystemMode } = useContext(DynamicSystemContext);
  return (
    <div className={classes.root}>
      <BottomNavigation
        className={classes.navigation}
        onChange={(_, newValue) => setSystemMode(newValue)}
        value={systemMode}
        showLabels
      >
        <BottomNavigationAction
          className={classes.navigationItem}
          label={ADD_BUTTON_LABEL}
          icon={<AddIcon className={classes.navigationIcon} />}
        />
        <BottomNavigationAction
          className={classes.navigationItem}
          label={LIST_BUTTON_LABEL}
          icon={<FormatListBulletedIcon className={classes.navigationIcon} />}
        />
      </BottomNavigation>
    </div>
  );
};

export default CustomNavigation;
