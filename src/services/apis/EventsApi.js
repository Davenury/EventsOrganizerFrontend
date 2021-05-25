const basicApiLink = "https://eventsorganizer.herokuapp.com/"

const header = {
    'Content-Type': 'application/json'
}

export const api = {

    getInstructors: function () {
        return fetch(basicApiLink + "instructor/all", {
            method: "GET",
            headers: header
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
            headers: header,
            body: JSON.stringify(instructor)
        })
            .then(response => response.json())

    },

    getInstructorById: function (id) {
        return fetch(basicApiLink + "instructor/" + id, {
            method: "GET",
            headers: header
        })
            .then(response => response.json())
    },

    getInstructorByName: function (name, surname) {
        return fetch(basicApiLink + "instructor/where?firstName=" + name + "&lastName=" + surname, {
            method: "GET",
            headers: header
        })
            .then(response => response.json())
    },

    getCourseById: function (id) {
        return fetch(basicApiLink + "classes/" + id, {
            method: "GET",
            headers: header
        })
            .then(response => response.json())
    },

    getInstructorsCourses: function (people) {
        const promises = people.map(person => {
            return fetch(basicApiLink + "instructor/" + person.id + "/classes", {
                method: "GET",
                headers: header
            })
        })
        return Promise.all(promises)
    },

    postAdminLogin: function(username, password) {
        return fetch(basicApiLink + "admin/login",{
            method: "POST",
            headers: header,
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
            .then(response => response.json())
    },
      
    getAllEvents: function(){
        return fetch(basicApiLink + '/classes/events/all', {
            method: "GET",
            headers: header
        })
    },

    getAllCoursesInEvents: function(eventName){
        return this.getCourseByParams({"event":eventName})
    },

    getCourseByParams: function(params) {
        const urlParams = Object.entries(params).map(([key,value],idx) => key+"="+value).join("&")
        return fetch(basicApiLink+"classes/where?"+urlParams,{
            method: "GET",
            headers: header
        })
    },

    updateCourse: function (id,course) {
        fetch(basicApiLink + "classes/" + id, {
            method: "PUT",
            mode: 'cors',
            headers: header,
            body: JSON.stringify(course)
        }).then(response => console.log(response.json()))
    },

    downloadSheet: function (instructorId){
        window.open(basicApiLink+"/excel/export?instructorId="+instructorId,"_blank")
    },

    modifyDateToBackendFormat: function(date){
        const dateTime = date.split("T")
        const newDate = dateTime[0]
        const time = dateTime[1].replace(":",".").slice(0,5)
        console.log(newDate+" "+time)
        return newDate+" "+time
    }

    

}
