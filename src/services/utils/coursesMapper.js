export const mapCoursesToEvents = courses => {
    console.log(courses)
    return courses.map(course => createClasses(course))
}

const createClasses = course => {
    return {
        title: course.classesType,
        start: new Date(course.startTime),
        end: new Date(course.endTime),
        hexColor: 'ababab',
        course: course
    }
}