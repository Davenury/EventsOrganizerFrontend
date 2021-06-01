import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { CourseDetails } from "./CourseDetails";

export function CourseView(){
    const { id } = useParams();
    const [course, setCourse] = useState({})

    useEffect(() => {
        api.getCourseById(id)
            .then(data => setCourse(data))
    }, [id])

    return(
        <div style={{width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "left"}}>
            <CourseDetails course={course}/>
        </div>
    )
}