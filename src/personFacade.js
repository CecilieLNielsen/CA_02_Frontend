const URL = "????"


function addPerson (person){
    const options = makeOptions("POST", person)
    return fetch(URL, options)
}

function editPerson(person){
    const options = makeOptions("PUT", person)
    return fetch(URL + "/" + person.id, options)
}

const personFacade = {
    addPerson,
    editPerson
}

function makeOptions (method, body){
    let optns = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if(body){
        optns.body = JSON.stringify(body);
    }
    return optns;
}

export default personFacade