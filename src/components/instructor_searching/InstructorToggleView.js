import react, { useState, useEffect } from 'react'
import { api } from "../../services/apis/EventsApi";
import swal from 'sweetalert';
import { InstructorTogglePresentation } from './InstructorTogglePresentation';
import { Box, CircularProgress, Grid } from '@material-ui/core';
import { Button } from '../../atoms/Button';

export const InstructorToggleView = (props) => {
    
    const [type, setType] = useState("list")
    const [person, setPerson] = useState(null);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true)
        getAllThings()
    }, [])

    const assertResponse = response => {
        if(response === undefined || response === null || response.length === 0)
            throw "We didn't find any courses for this person"
    }

    const getAllThings = () => {
        api.getInstructorByName(props.name, props.surname)
            .then(response => {
                assertResponse(response)
                return response
            })
            .then(response => setPerson(response))
            .catch(error =>{
                setFetching(false)
                swal("Error", "We've encounter an error while trying to get your classes!\n" + error, "error")
            })
    }

    const setNewType = () => {
        if(type === "list")
            setType("calendar")
        else
            setType("list")
    }

    const getTextForTypeButton = () => {
        if(type === "list") return "Calendar"
        return "List"
    }

    const downloadSheet = () => {
        console.log(person[0])
        api.downloadSheet(person[0].id)
    }


    return(
        <div>
            {
                person ?
                <div>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box mb={2}>
                                <Button onClick={() => props.onBack()} text="Back!"/>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box mb={2}>
                                <Button onClick={() => setNewType()} text={getTextForTypeButton()}/>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box mb={2}>
                                <Button onClick={downloadSheet} text={"Download xlsx"}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <InstructorTogglePresentation person={person} type={type}/>
                </div>
                    :
                    <div>
                        {
                            fetching ? 
                            <div>
                                We're getting your classes ready!
                                <Box m={2}>
                                    <CircularProgress />
                                </Box>
                            </div>
                            :
                            <div>
                                We didn't succeed in getting your courses!
                            </div>
                        }            
                    </div>
            }
        </div>
    )
}
