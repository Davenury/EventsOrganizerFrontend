import { mapCoursesToEvents as mapper } from '../services/utils/coursesMapper';

test('maps courses to events', () => {
    expect(mapper(courses)).toStrictEqual(events)
})

test('maps empty courses to empty events and doesnt crash', () => {
    expect(mapper(emptyCourses)).toStrictEqual(emptyEvents)
})


let courses = [
    {
        appointmentNumber: 1,
        classesForm: "REMOTE",
        classesType: "LECTURE",
        classroom: "1.38",
        endTime: "2021-03-30T09:30:00",
        id: 1,
        instructor: {
            id: 1,
            firstName: "Adam", 
            lastName: "Nowak", 
            email: "anowak@student.agh.edu.pl"
        },
        name: "IO",
        numberOfHours: 2,
        startTime: "2021-03-30T08:00:00",
        studentsGroup: null,
    },
    {
        appointmentNumber: 1,
        classesForm: "REMOTE",
        classesType: "LECTURE",
        classroom: "1.38",
        endTime: "2021-03-30T09:30:00",
        id: 1,
        instructor: {
            id: 1,
            firstName: "Adam", 
            lastName: "Nowak", 
            email: "anowak@student.agh.edu.pl"
        },
        name: "IO",
        numberOfHours: 2,
        startTime: "2021-03-30T08:00:00",
        studentsGroup: null,
    }
]

let events = [{
        title: "LECTURE",
        start: new Date("2021-03-30T08:00:00"),
        end: new Date("2021-03-30T09:30:00"),
        course: {
            appointmentNumber: 1,
        classesForm: "REMOTE",
        classesType: "LECTURE",
        classroom: "1.38",
        endTime: "2021-03-30T09:30:00",
        id: 1,
        instructor: {
            id: 1,
            firstName: "Adam", 
            lastName: "Nowak", 
            email: "anowak@student.agh.edu.pl"
        },
        name: "IO",
        numberOfHours: 2,
        startTime: "2021-03-30T08:00:00",
        studentsGroup: null,
        }
    },
    {
        title: "LECTURE",
        start: new Date("2021-03-30T08:00:00"),
        end: new Date("2021-03-30T09:30:00"),
        course: {
            appointmentNumber: 1,
        classesForm: "REMOTE",
        classesType: "LECTURE",
        classroom: "1.38",
        endTime: "2021-03-30T09:30:00",
        id: 1,
        instructor: {
            id: 1,
            firstName: "Adam", 
            lastName: "Nowak", 
            email: "anowak@student.agh.edu.pl"
        },
        name: "IO",
        numberOfHours: 2,
        startTime: "2021-03-30T08:00:00",
        studentsGroup: null,
        }
    }
]

let emptyCourses = []

let emptyEvents = []