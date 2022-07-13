// Write your JavaScript code here!

window.addEventListener("load", function() {
    
const tester = document.getElementById("change-for-tests")
const pilotStatus = document.getElementById("pilotStatus");
const copilotStatus = document.getElementById("copilotStatus");
const fuelStatus = document.getElementById("fuelStatus");
const cargoStatus = document.getElementById("cargoStatus");
const faultyItems = document.getElementById("faultyItems");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    }).then(function () {
       let pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    });
 
 
    const submitButt = document.getElementById("formSubmit");
    submitButt.addEventListener("click", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            window.alert("All fields are required");
            event.preventDefault();
        }
        formSubmission(window.document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);


    });
});