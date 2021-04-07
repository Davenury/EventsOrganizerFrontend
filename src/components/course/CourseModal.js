import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

export function CourseModal(props){

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
            >
                <Fade in={props.open}>
                    <div>
                        Cokolwiek
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}