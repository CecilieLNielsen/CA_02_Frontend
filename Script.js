// Setup
const base_url = "https://www.bycecilie.dk/CA_02/";

// Converter functions
function createPersonsTable(data) {
    const headers = "<table class=\"table\"><tr><th>Fornavn</th><th>Efternavn</th><th>Email</th><th>Phone</th><th>Adresse</th><th>City</th><th>Hobby</th></tr>";
    let mappedRows = data.map(person => {
        const phones = person.phones.map(phone => phone.number).join(', ');
        const hobbies = person.hobbies.map(hobby => hobby.name).join(', ');
        return "<tr><td>" + person.firstName  + "</td><td>" + person.lastName  + "</td><td>" + person.email  + "</td><td>" + phones  + "</td><td>" + person.address.street  + "</td><td>" + person.address.cityInfo.zipCode + ", " + person.address.cityInfo.city  + "</td><td>" + hobbies  + "</td> </tr>"
    });
    let joinedRows = mappedRows.join("");
    document.getElementById("hobbyTable").innerHTML = headers + joinedRows + "</table>";
}

function createParagraphPersonCount(data) {
    document.getElementById("hobbyTable").innerHTML = "Der er " + data + " antal medlemmer";

}

// Fetch functions
function fetchPersons() {
    const hobby = document.getElementById("hobbyId").value;
    const url = "api/person/hobby/" + hobby;
    fetch(base_url + url)
        .then(res => res.json())
        .then(data => createPersonsTable(data));
}

function fetchPersonsCount() {
    const hobby = document.getElementById("hobbyId").value;
    const url = "api/hobby/count/" + hobby;
    fetch(base_url + url)
        .then(res => res.json())
        .then(data => createParagraphPersonCount(data));
}
           
                
// Event listeners
document.getElementById("HobbySearch").addEventListener("click", function (event) {
    event.preventDefault();
    fetchPersons();
});

document.getElementById("PersonsCount").addEventListener("click", function (event) {
    event.preventDefault();
    fetchPersonsCount();
});


