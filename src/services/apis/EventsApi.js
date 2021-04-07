const basicApiLink = "http://localhost:8080/"

export const api = {

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
            return fetch(basicApiLink + "classes/" + (idx + 1))
        })
        return Promise.all(promises)
    }

}
