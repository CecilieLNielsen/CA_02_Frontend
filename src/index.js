
import personFacade from "./personFacade"

function addPerson(){
    let newP = {
        "inputFirstName" : document.getElementById("inputFirstName").value,
        "inputLastName" : document.getElementById("inputLastName").value,
        "inputEmail" : document.getElementById("inputEmail").value,
        "inputAddress" : document.getElementById("inputAddress").value,
        "inputAdditionalInfo" : document.getElementById("inputAdditionalInfo").value,
        "inputZipCode" : document.getElementById("inputZipCode").value,
        "inputCity" : document.getElementById("inputCity").value,
        "inputPhone1" : document.getElementById("inputPhone1").value,
        "inputDescription1" : document.getElementById("inputDescription1").value,
        "inputPhone2" : document.getElementById("inputPhone2").value,
        "inputDescription2" : document.getElementById("inputDescription2").value,
        "inputHobby1" : document.getElementById("inputHobby1").value,
        "inputHobby2" : document.getElementById("inputHobby2").value,
        "inputHobby3" : document.getElementById("inputHobby3").value,
    }
    personFacade.addPerson(newP)
}

document.getElementById("saveBtn").addEventListener("click", addPerson)

/*
function editPerson(){

}
*/