import React, { useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '10px'
    },
    children:{
        '& *':
            {
                padding: '0 10px',
            }
    }
  });

export function InstructorView({instructorProp}){

    const classes = useStyles();
    
    const [instructor, setInstructor] = useState(instructorProp)
    const [isChangeMode, setIsChangeMode] = useState(false)

    const onChangeValue = (event) => {
            setInstructor({
                ...instructor,
                email: event.target.value
            })
        }

    const changeFunction = () => setIsChangeMode(true)


    const submitFunction = () => {
        api.updateInstructor(instructor)
        setIsChangeMode(false)
    }


    return(
        <Grid   container
        direction="row"
        justify="center"
        alignItems="center"
        className={`${classes.root} ${classes.children}`}
        >
            <label>{instructor.firstName} {instructor.lastName}</label>
            {!isChangeMode ? (
                <Button variant="contained" color="primary" onClick={changeFunction}>Change instructor</Button>
                ) : (<div className={classes.children}>
                    <TextField type="email" value={instructor.email} onChange={onChangeValue}/>
                    <Button variant="outlined" color="primary" onClick={submitFunction} style={{marginRight: "5px"}}>Submit</Button>
                    <Button variant="outlined" color="secondary" onClick={() => setIsChangeMode(false)} >X</Button>
                </div>
            )}
        </Grid>
    )
}
