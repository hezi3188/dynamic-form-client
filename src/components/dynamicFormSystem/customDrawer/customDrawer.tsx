import React, { useState } from 'react';
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
  Button,
} from '@mui/material';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './customDrawerStyles';
import { getFormsNamesWithIds } from '../../../utils/schemaUtils';
import { DRAWER_TITLE } from '../../../consts/strings';
import { FormsList } from '../../../models/enums/formsList';

const formList = getFormsNamesWithIds();

interface Props {
  selectedFormId: FormsList;
  setSelectedFormId: (id: FormsList) => void;
}
const CustomDrawer: React.FC<Props> = ({
  selectedFormId,
  setSelectedFormId,
}) => {
  const { classes } = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className={classes.root}>
        <Button onClick={toggleDrawer}>
          <MenuIcon className={classes.menuIcon} />
        </Button>
      </div>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {DRAWER_TITLE}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {formList.map(({ id, title }) => (
            <ListItem key={title} disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedFormId(id);
                  toggleDrawer();
                }}
                selected={id === selectedFormId}
              >
                <ListItemIcon>
                  <DynamicFormIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
