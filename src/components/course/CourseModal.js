import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { CourseDetails } from './CourseDetails';


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
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}