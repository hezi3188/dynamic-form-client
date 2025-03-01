import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    drawer: {
      minWidth: '200px',
      '& .MuiDrawer-paper': {
        minWidth: '200px',
        boxSizing: 'border-box',
      },
    },
  };
});
