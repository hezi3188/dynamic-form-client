import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      width: '100%',
      height: '150px',
      paddingTop: '25px',
    },
    navigation: {
      height: '120px',
      width: '250px',
    },
    navigationIcon: {
      width: '50px',
      height: '50px',
    },
    navigationItem: {
      '& .MuiBottomNavigationAction-label': {
        fontSize: '15px',
      },
    },
  };
});
