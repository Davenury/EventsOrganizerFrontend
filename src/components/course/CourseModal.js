import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { CourseDetails } from './CourseDetails';
import { Button } from '../../atoms/Button';
import { green } from '@material-ui/core/colors';
import { CourseLinkAlert } from './CourseLinkAlert';
import { Box, Grid } from "@material-ui/core";
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexBasis: "25em"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 4, 4)
    },
}));


export function CourseModal(props){

    const classes = useStyles();
    const [show, setShow] = useState(false);

    const showAlert = () => {
        setShow(!show)
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Modal
                        open={props.open}
                        onClose={props.handleClose}
                        className={classes.modal}
                    >
                        <Fade in={props.open}>
                            <div className={classes.paper}>
                                <div style={{float:"right"}}>
                                    <IconButton onClick={props.handleClose}>
                                        &#10005;
                                    </IconButton>
                                </div>
                                        <CourseDetails
                                            course={props.course}
                                        />
                                <Box m={2}>
                                    {show ? <CourseLinkAlert id={props.course.id}/> : <div></div>}
                                </Box>
                                <Button 
                                    color={green}
                                    text={show ? "Hide this link" : "Generate Link!"}
                                    onClick={showAlert}
                                />
                            </div>
                        </Fade>
                    </Modal>
                </Grid>
            </Grid>
        </div>
    )
}
