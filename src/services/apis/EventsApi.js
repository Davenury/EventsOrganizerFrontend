const basicApiLink = "https://eventsorganizer.herokuapp.com/"

export const api = {

    getInstructors: function(){
        return fetch(basicApiLink+"instructor/all", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    },

    updateInstructors: function(instructors){
        return instructors.map(elem => {
            fetch(basicApiLink+"instructor/"+elem.id, {
                method: "PUT",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(elem)
            })
                .then(response => response.json())
        })
    },

    getInstructorById: function(id){
        return fetch(basicApiLink + "instructor/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    },

    getInstructorByName: function(name, surname){
        return fetch(basicApiLink + "instructor/where?firstName=" + name + "&lastName=" + surname,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    },

    getCourseById: function(id){
        return fetch(basicApiLink + "classes/" + id, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(response => response.json())
    },

    getInstructorsCourses: function(people){
        const promises = people.map( (person, idx) => {
            return fetch(basicApiLink + "classes/" + (idx + 1), {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            })
        })
        return Promise.all(promises)
    }

}
