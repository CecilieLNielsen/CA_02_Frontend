// Setup
const base_url = "https://www.bycecilie.dk/CA_02/";

// Converter functions
function createPersonsTable(data) {
    console.log(data);
    const headers = "<table class=\"table\"><tr><th>Fornavn</th><th>Efternavn</th><th>Email</th><th>Phone</th><th>Adresse</th><th>City</th><th>Hobby</th></tr>";

    let mappedRows = data.map(person => "<tr><td>" + person.firstName  + "</td><td>" + person.lastName  + "</td><td>" + person.email  + "</td><td>" + person.phone  + "</td><td>" + person.address.street  + "</td><td>" + person.address.cityInfo.zipCode + ", " + person.address.cityInfo.city  + "</td><td>" + person.hobby  + "</td> </tr>");
    let joinedRows = mappedRows.join("");
    document.getElementById("HobbyTabel").innerHTML = headers + joinedRows + "</table>";
}

// Fetch functions
function fetchPersons() {
    const url = "api/person/all";
    fetch(base_url + url)
        .then(res => res.json())
        .then(data => createPersonsTable(data));
}
                
// Event listeners
document.getElementById("HobbySearch").addEventListener("click", function (event) {
    event.preventDefault();
    fetchPersons();
});


