const basicApiLink = "https://eventsorganizer.herokuapp.com/"

export const api = {

    getInstructors: function () {
        return fetch(basicApiLink + "instructor/all", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    },

    updateInstructors: function (instructors) {
        instructors.forEach(element => {
            this.updateInstructor(element);
        });
    },

    updateInstructor: function (instructor) {
        fetch(basicApiLink + "instructor/" + instructor.id, {
            method: "PUT",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(instructor)
        })
            .then(response => response.json())

    },

    getInstructorById: function (id) {
        return fetch(basicApiLink + "instructor/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    },

    getInstructorByName: function (name, surname) {
        return fetch(basicApiLink + "instructor/where?firstName=" + name + "&lastName=" + surname, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    },

    getCourseById: function (id) {
        return fetch(basicApiLink + "classes/" + id, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(response => response.json())
    },

    getInstructorsCourses: function (people) {
        const promises = people.map(person => {
            return fetch(basicApiLink + "instructor/" + person.id + "/classes", {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            })
        })
        return Promise.all(promises)
    }

}
