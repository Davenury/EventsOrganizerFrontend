import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { TextField, Box, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CourseComponent } from './CourseComponent';

const useStyles = makeStyles({
    root: {
        padding: '10px'
    },
    children: {
        '& *':
        {
            padding: '0 10px',
        }
    }
});

export function EventView({ eventName }) {

    const classes = useStyles();

    const [courses, setCourses] = useState([])



    useEffect(() => {
        api.getAllCoursesInEvents(eventName)
            .then(response => response.json())
            .then(data => {
                setCourses(
                    data.map(elem => {
                        return {
                            ...elem,
                            date: elem.startTime.split('T')[0]
                        }
                    }))
            })
    }, [])

    const groupByDate = () =>
        courses.reduce((r, a) => {
            r[a.date] = [...r[a.date] || [], a];
            return r;
        }, {});

    const coursesComponents = (courses) => {
        return courses.map(course => {
            return (
                <Grid container item xs={12} spacing={3}>
                    <CourseComponent courseProp={course} />
                </Grid>
            )
        })
    }

    const getCourses = () => {
        const groupedObjects = groupByDate();
        return Object.keys(groupedObjects).sort().map(date => {
            return (
                <div>
                    <p>Date: {date}</p>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {coursesComponents(groupedObjects[date])}
                    </Grid>
                </div>)
        })
    }


    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <div>{getCourses()}</div>
        </Grid>
    )
}
