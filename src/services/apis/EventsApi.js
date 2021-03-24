const basicApiLink = "http://localhost:8080/"

export const api = {

    getAllInstructors: function(){
        fetch(basicApiLink + "/instructor/all", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => console.log(result))
    },

    getInstructorById: function(id){
        fetch(basicApiLink + "instructor/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => console.log(result))
    }

}
