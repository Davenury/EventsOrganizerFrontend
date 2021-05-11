import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { TextField, Box, Grid } from '@material-ui/core';
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
                <button variant="contained" onClick={changeFunction}>Change instructor</button>
                ) : (<div className={classes.children}>
                    <TextField type="email" value={instructor.email} onChange={onChangeValue}/>
                    <button variant="contained" onClick={submitFunction}>Submit</button>
                </div>
            )}
        </Grid>
    )
}
