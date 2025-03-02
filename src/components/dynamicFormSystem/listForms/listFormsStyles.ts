import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      '@media (min-width: 600px)': {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
    },
    listContainer: {
      width: '100%',
      marginBottom: '16px',
      '@media (min-width: 600px)': {
        flex: 1,
        marginRight: '16px',
        marginBottom: '0',
      },
    },
    cardContainer: {
      width: '100%',
      '@media (min-width: 600px)': {
        flex: 2,
      },
    },
    list: {
      width: '100%',
      backgroundColor: 'background.paper',
    },
    listItem: {
      transition: 'all 0.3s ease',
      padding: '16px',
      margin: '8px 0',
      borderRadius: '8px',
      border: '1px solid #ddd',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        backgroundColor: '#f0f0f0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
    card: {
      width: '100%',
      marginTop: '16px',
    },
    field: {
      marginBottom: '8px',
    },
    divider: {
      margin: '8px 0',
    },
  };
});
