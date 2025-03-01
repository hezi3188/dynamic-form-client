import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    root: {
      display: 'flex',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
  };
});
