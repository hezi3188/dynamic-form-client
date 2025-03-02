import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    menuIcon: {
      height: '50px',
      width: '50px',
    },
    drawer: {
      minWidth: '200px',
      '& .MuiDrawer-paper': {
        minWidth: '200px',
        boxSizing: 'border-box',
      },
    },
  };
});
