export const mapCoursesToEvents = courses => {
    console.log(courses)
    return courses.map(course => createClasses(course))
}

const createClasses = course => {
    return {
        title: course.event,
        start: new Date(course.startTime),
        end: new Date(course.endTime),
        course: course
    }
}