import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { CourseDetails } from './CourseDetails';
import { Button } from '../../atoms/Button';
import { green } from '@material-ui/core/colors';
import { generate } from '../../services/utils/courseLinkGenerator';
import { CourseLinkAlert } from './CourseLinkAlert';
import { Box } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexBasis: "25em"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 4, 4),
      width: "60%"
    },
}));


export function CourseModal(props){

    const classes = useStyles();
    const [show, setShow] = useState(false);

    const showAlert = () => {
        setShow(!show)
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                className={classes.modal}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
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
        </div>
    )
}