import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { generate } from '../../services/utils/courseLinkGenerator';
import { Button } from '../../atoms/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Grid } from '@material-ui/core';

export function CourseLinkAlert(props){

    const [openSnack, setOpenSnack] = React.useState(false);

    const link = generate(props.id)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(link)
        setOpenSnack(true)
    }

    const closeSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false)
    }

    return (
        <Alert severity="success">
            <Grid container spacing={1}>
                    <Grid item xs={12} sm={8}>
                        Here's your link: <br />
                        {link}
                    </Grid>
                    <Grid item xs={12} sm={4} style={{textAlign: 'right'}}>
                            <Button text="copy" onClick={copyToClipboard}/>
                        </Grid>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={openSnack}
                        autoHideDuration={2500}
                        onClose={closeSnack}
                        message="Link Copied!"
                    />
            </Grid>
        </Alert>
    )
}