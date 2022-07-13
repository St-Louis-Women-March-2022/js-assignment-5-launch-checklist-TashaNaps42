// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
    const tester = document.getElementById("change-for-tests");
    const launchStatus = document.getElementById("launchStatus");
    
    if (validateInput(pilotValue) !== "Not a Number" || validateInput(copilotValue) !== "Not a Number"|| 
    validateInput(fuelLevelValue) !== "Is a Number" || validateInput(cargoLevelValue) !=="Is a Number")   {
        event.preventDefault();
        window.alert("Invalid inputs, re-enter.");
    } else {
        event.preventDefault();
        pilotStatus.innerHTML = `Pilot ${pilotValue} is ready`;
        copilotStatus.innerHTML = `Pilot ${copilotValue} is ready`;
        if (fuelLevelValue < 10000 && cargoLevelValue > 10000){
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        } else if (fuelLevelValue < 10000) {
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"
        } else if (cargoLevelValue > 10000) {
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
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

<div  id="faultyItems" data-testid="faultyItems">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
}
formSubmission(window.document, list, "Chris", "Bob", 0, 5);
     expect(list.style.visibility).toEqual("visible");
     expect(h2.style.color).toEqual("rgb(199, 37, 78)");
     expect(h2.textContent).toEqual("Shuttle Not Ready for Launch");
     expect(pilotStatus.textContent).toEqual("Pilot Chris is ready for launch");
      expect(copilotStatus.textContent).toEqual("Co-pilot Bob is ready for launch");
     expect(fuelStatus.textContent).toEqual("Fuel level too low for launch");
     expect(cargoStatus.textContent).toEqual("Cargo mass low enough for launch");

*/
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
