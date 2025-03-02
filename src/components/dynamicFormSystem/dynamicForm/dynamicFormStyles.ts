import { makeStyles } from 'tss-react/mui';
export const MEDIA_WIDTHS = {
  small: '80%',
  medium: '60%',
  large: '50%',
};
export const useStyles = makeStyles()(() => {
  return {
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '16px',
      overflow: 'auto',
    },
    title: {
      textAlign: 'center',
      width: '100%',
    },
    form: {
      width: '100%',
      maxWidth: '600px',
      margin: 'auto',
      boxSizing: 'border-box',
      '@media (min-width: 600px)': {
        width: MEDIA_WIDTHS.small,
      },
      '@media (min-width: 960px)': {
        width: MEDIA_WIDTHS.medium,
      },
      '@media (min-width: 1280px)': {
        width: MEDIA_WIDTHS.large,
      },
    },
    field: {
      marginBottom: '16px',
    },
    buttons: {
      display: 'flex',
      width: '100%',
      margin: 'auto',
      flexDirection: 'row-reverse',
      justifyContent: 'space-around',
      '@media (min-width: 600px)': {
        width: MEDIA_WIDTHS.small,
      },
      '@media (min-width: 960px)': {
        width: MEDIA_WIDTHS.medium,
      },
      '@media (min-width: 1280px)': {
        width: MEDIA_WIDTHS.large,
      },
    },
  };
});
