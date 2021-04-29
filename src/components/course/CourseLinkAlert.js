import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { generate } from '../../services/utils/courseLinkGenerator';
import { Button } from '../../atoms/Button';
import Snackbar from '@material-ui/core/Snackbar';

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
            Here's your link:
            <div style={{display: "table", clear:"both"}}>
                <div style={{width: "70%", float: "left"}}>
                    {link}
                </div>
                <div style={{width: "20%", float: "left", position: "absolute", right: "10%"}}>
                    <Button text="copy" onClick={copyToClipboard}/>
                </div>
            </div>
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
        </Alert>
    )
}