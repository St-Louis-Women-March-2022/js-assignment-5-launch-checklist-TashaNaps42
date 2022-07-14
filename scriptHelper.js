// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
        `
}


function validateInput(testInput) {
   if (isNaN(Number(testInput)) && testInput !== "") {
    return "Not a Number"
   } else if (!isNaN(Number(testInput)) && testInput !== ""){
    return "Is a Number"
   } else {
    return "Empty"
   }
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilotValue = pilot.value;
    copilotValue = copilot.value;
    fuelLevelValue = fuelLevel.value;
    cargoLevelValue = cargoLevel.value;
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");
    if (validateInput(pilotValue) === "Empty" || validateInput(copilotValue) === "Empty"|| 
    validateInput(fuelLevelValue) === "Empty" || validateInput(cargoLevelValue) === "Empty"){
        window.alert("All fields are required");
        event.preventDefault();
    } else if (validateInput(pilotValue) !== "Not a Number" || validateInput(copilotValue) !== "Not a Number"|| 
    validateInput(fuelLevelValue) !== "Is a Number" || validateInput(cargoLevelValue) !=="Is a Number")   {
        event.preventDefault();
        window.alert("Invalid inputs, re-enter.");
    } else {
        event.preventDefault();
        pilotStatus.innerHTML = `Pilot ${pilotValue} is ready`;
        copilotStatus.innerHTML = `Co-Pilot ${copilotValue} is ready`;
        if (fuelLevelValue < 10000 && cargoLevelValue > 10000){
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        } else if (fuelLevelValue < 10000 && cargoLevelValue < 10000) {
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        } else if (cargoLevelValue > 10000 && fuelLevelValue > 10000) {
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        } else {
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(65, 159, 106)";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";

        }
    }

}
/*
*/
async function myFetch() {
    let planetsReturned = [];

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()   
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    const pickedPlanet = planets[(Math.floor(Math.random() * planets.length))];
    return pickedPlanet;
 }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
