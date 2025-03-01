import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import { useStyles } from './customDrawerStyles';

const DRAWER_TITLE = 'מערכת טפסים';

const CustomDrawer = () => {
  const { classes } = useStyles();

  return (
    <Drawer className={classes.drawer} anchor="left" variant="permanent">
      <Toolbar>
        <IconButton edge="start"></IconButton>
        <Typography variant="h6" noWrap component="div">
          {DRAWER_TITLE}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {['טופס 1', 'טופס 2'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DynamicFormIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
