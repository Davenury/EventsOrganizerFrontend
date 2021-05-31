import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    fontSize: 24,
  },
});

export const Event = (props) => {
    
    const classes = useStyles();

    const handleEventClick = () => {
        props.toggle(props.name)
    }
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
            <div style={{textAlign: "right"}}>
                <Button size="small" onClick={handleEventClick} variant="outlined" color="primary">View Courses!</Button>
            </div>
        </CardActions>
      </Card>
    );
  }
