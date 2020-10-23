
function addPerson (person){
    const options = makeOptions("POST", person)
    return fetch(URL, options)
}

const personFacade = {
    addPerson
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