import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStyles } from './listFormsStyles';
import { FormsList } from '../../../models/enums/formsList';
import { FormSubmission } from '../../../models/interfaces/formSubmission';
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Divider,
  Alert,
} from '@mui/material';
import { format } from 'date-fns';
import {
  FORM_DETAILS_TITLE,
  LOAD_FAILED_LIST_MESSAGE,
  NO_DATA_MESSAGE,
} from '../../../consts/strings';
import { formatValue } from '../../../utils/datesUtils';

interface Props {
  formId: FormsList;
}

const ListForms: React.FC<Props> = ({ formId }) => {
  const { classes } = useStyles();
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] =
    useState<FormSubmission | null>(null);

  const resetComponent = () => {
    setSubmissions([]);
    setSelectedSubmission(null);
    setLoading(true);
    setError(null);
  };

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get<FormSubmission[]>(
          `${import.meta.env.VITE_API_URL}/formSubmittion/${formId}`
        );
        setSubmissions(response.data);
      } catch (err) {
        setError(LOAD_FAILED_LIST_MESSAGE);
      } finally {
        setLoading(false);
      }
    };
    resetComponent();
    fetchSubmissions();
  }, [formId]);

  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.root}>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }
  if (submissions.length === 0) {
    return (
      <div className={classes.root}>
        <Alert severity="info">{NO_DATA_MESSAGE}</Alert>
      </div>
    );
  }

  const handleListItemClick = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
  };

  return (
    <div className={classes.root}>
      <div className={classes.listContainer}>
        <List>
          {submissions.map((submission) => (
            <ListItem
              key={submission._id}
              onClick={() => handleListItemClick(submission)}
              className={classes.listItem}
            >
              <ListItemText
                primary={format(
                  new Date(submission.createdAt),
                  'HH:mm dd/MM/yy'
                )}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.cardContainer}>
        {selectedSubmission && (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="div">
                {FORM_DETAILS_TITLE}
              </Typography>
              <Divider className={classes.divider} />
              {Object.entries(selectedSubmission.fields).map(([key, value]) => {
                if (value)
                  return (
                    <div key={key} className={classes.field}>
                      <Typography variant="subtitle1" color="textPrimary">
                        {key}:
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {formatValue(value)}
                      </Typography>
                      <Divider className={classes.divider} />
                    </div>
                  );
              })}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ListForms;
