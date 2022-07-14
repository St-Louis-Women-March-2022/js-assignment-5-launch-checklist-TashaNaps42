// Write your JavaScript code here!

window.addEventListener("load", function() {
    
const faultyItems = document.getElementById("faultyItems");
const pilotName = document.querySelector("input[name=pilotName]");
const copilotName = document.querySelector("input[name=copilotName]");
const fuelLevel = document.querySelector("input[name=fuelLevel]");
const cargoMass = document.querySelector("input[name=cargoMass]");

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

        formSubmission(window.document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);

    });
});