import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { Grid } from '@material-ui/core';
import { CourseComponent } from './CourseComponent';

export function EventView({ eventName }) {

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
    }, [eventName])

    const groupByDate = () =>
        courses.reduce((collection, elem) => {
            collection[elem.date] = [...collection[elem.date] || [], elem];
            return collection;
        }, {});

    const coursesComponents = (courses) => {
        return courses.map(course => {
            return (
                <Grid container item xs={12} spacing={3}>
                    <CourseComponent courseProp={course} />
                    <hr />
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
                    >
                        <Grid item xs={12} sm={12}>
                            {coursesComponents(groupedObjects[date])}
                        </Grid>
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
