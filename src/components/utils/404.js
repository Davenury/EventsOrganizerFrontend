import { useHistory } from 'react-router-dom'
import { Button } from '../../atoms/Button';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';

export const Page404 = (props) => {

    const history = useHistory()

    const handleComeBack = () => {
        history.push("/")
    }

    return(
        <div style={{textAlign: "left", marginTop: "10vh", marginLeft: "5%", marginRight: "20%"}}>
            <Grid container direction={'row'} wrap="nowrap">
                <Grid container direction={'column'} spacing={3}>
                    <Grid item xs={12} sm={8} >
                        <Box p={1}>
                            <Typography variant="h4">
                                Oops... Something's Wrong!
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h5">
                                {props.text}
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Button text="Take me Home!" onClick={handleComeBack}/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img width="100%" src="https://imgur.com/5Wqj1AL.png" alt="M" />
                </Grid>
            </Grid>
        </div>
    )
    
}
