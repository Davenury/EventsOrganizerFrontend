import React, { useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      margin: "20px",
      '& *':
        {
            margin: '5px',
        }
    }
  });


export function CourseComponent({ courseProp }) {

    const classes = useStyles();

    const [course, setCourse] = useState(courseProp)


    const submitFunction = () => {
        const newObj = { 
            ...course,
            firstName: course.instructor.firstName,
            lastName: course.instructor.lastName,
            startTime: api.modifyDateToBackendFormat(course.startTime),
            endTime: api.modifyDateToBackendFormat(course.endTime)
        }
        delete newObj["date"]
        delete newObj["instructor"]
        delete newObj["reminderNote"]
        delete newObj["id"]


        api.updateCourse(course.id,newObj)
    }

    const onChangeByKey = (key) =>
        (event) => {
            const newObj = { ...course }
            newObj[key] = event.target.value
            setCourse(newObj)
        }

    const onChangeInstructorName = (event) => {
        const newObj = { ...course }
        const splitted = event.target.value.split(" ")
        delete newObj.instructor["id"]
        delete newObj.instructor["email"]
        newObj.instructor.firstName = splitted[0]
        newObj.instructor.lastName = splitted[1]
        setCourse(newObj)
    }

    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.root}
        >
                <TextField label={"Course name"} value={course.name} onChange={onChangeByKey("name")} />
                <TextField label={"Instructor"} value={course.instructor.firstName + " " + course.instructor.lastName}
                    onChange={onChangeInstructorName} />
                <TextField label={"Start time"} value={course.startTime} onChange={onChangeByKey("startTime")} />
                <TextField label={"End time"} value={course.endTime} onChange={onChangeByKey("endTime")} />
                <TextField label={"Students Group"} value={course.studentsGroup} onChange={onChangeByKey("studentsGroup")} />
                <TextField label={"Number of hours"} value={course.numberOfHours} onChange={onChangeByKey("numberOfHours")} />
                <TextField label={"Classes form"} value={course.classesForm} onChange={onChangeByKey("classesForm")} />
                <TextField label={"Class type "} value={course.classType} onChange={onChangeByKey("classesType")} />
                <TextField label={"Classroom"} value={course.classroom} onChange={onChangeByKey("classroom")} />
            <Button variant="contained" onClick={submitFunction}>Submit changes</Button>
        </Grid>

    )
}
