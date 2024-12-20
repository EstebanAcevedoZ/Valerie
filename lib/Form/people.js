let numberOfPeople = 0;
let people = [];
        
function setNumberOfPeople() {
    numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
    if (numberOfPeople > 0) {
        document.getElementById("inputContainer").style.display = "block";
        document.getElementById("numberOfPeople").disabled = true;
    } else {
        alert("Ingrese un número válido.");
    }
}

function addPerson() {
    const personName = document.getElementById("personName").value.trim();
    if (personName && people.length < numberOfPeople) {
        people.push(personName);
        document.getElementById("peopleList").innerHTML += `<li>${personName}</li>`;
        document.getElementById("personName").value = "";
        if (people.length === numberOfPeople) {
            document.getElementById("submitButton").style.display = "block";
        }
    } else if (people.length >= numberOfPeople) {
        alert("Ya añadiste a todas las personas.");
    } else {
        alert("Por favor ingrese un nombre.");
    }
}

function submitForm() {
    alert(`Personas agregadas: ${people.join(", ")}`);
    // You can handle form submission here
}