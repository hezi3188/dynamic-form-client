import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useStyles } from './customNavigationStyles';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ADD_BUTTON_LABEL, LIST_BUTTON_LABEL } from '../../../consts/strings';
import { SystemMode } from '../../../models/enums/systemMode';

interface Props {
  systemMode: SystemMode;
  setSystemMode: (mode: SystemMode) => void;
}
const CustomNavigation: React.FC<Props> = ({ systemMode, setSystemMode }) => {
  const { classes } = useStyles();

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
