let divs = Array();
document.addEventListener('DOMContentLoaded', () => {
    divs.push(document.getElementById("kinetic"));
    divs.push(document.getElementById("potential"));
    divs.push(document.getElementById("electric"));
    divs.push(document.getElementById("amperage"));
    divs.push(document.getElementById("force"));
    divs.push(document.getElementById("acceleration"));
    divs.push(document.getElementById("impulse"));
    divs.push(document.getElementById("work"));
    divs.push(document.getElementById("rest"));
});
const c = 299792458;
document.addEventListener("input", () => {
    if (document.readyState === 'complete'){
        let divOption = document.getElementById("energy-options").value;
        showOnly(document.getElementById(divOption));
        let divHeight = document.getElementById(divOption).offsetHeight;
        document.getElementById("btn").style = `margin-top: ${divHeight}px`;
    }
})

document.addEventListener("keydown", (k) => {
    if (k.key === 'Enter') document.getElementById("btn").click();
})

function showOnly(divName){
    divs.forEach(element => {
        if (element.id == divName.id){
            document.getElementById(element.id).style = 'visibility: visible';
        } else {
            document.getElementById(element.id).style = 'visibility: hidden';
        }
    });
}

function getKineticEnergy(mass, velocity){
    let kineticEnergy = (1/2) * mass * velocity**2;
    return kineticEnergy;
}

function getPotentialEnergy(mass, g, height){
    let potentialEnergy = mass * g * height;
    return potentialEnergy;
}

function getElectricWatts(voltage, amperage, time){
    let watts = voltage * amperage * time;
    return watts;
}

function getAmperage(voltage, ohms){
    let current = voltage / ohms;
    return current;
}

function getForce(mass, acceleration){
    let force = mass * acceleration;
    return force;
}

function getAcceleration(velocity, initialVelocity, time){
    let acceleration = (velocity - initialVelocity) / time;
    return acceleration;
}

function getImpulse(force, time){
    let impulse = force * time;
    return impulse;
}

function getWork(force, displacement){
    let work = force * displacement;
    return work;
}

function getRest(mass){
    let energy = mass * c**2;
    return energy;
}


function calculate(){
    let energyOption = document.getElementById("energy-options").value;
    let results = document.getElementById("results");
    switch (energyOption){
        case "kinetic": {
            let mass = document.getElementById("kinetic-mass").value;
            let velocity = document.getElementById("kinetic-velocity").value;
            let kineticEnergy = getKineticEnergy(mass, velocity);
            results.textContent = `${kineticEnergy} Joules`;
            break;
        }
        case "potential": {
            let mass = document.getElementById("potential-mass").value;
            let gravity = document.getElementById("potential-gravitational-acceleration").value;
            let height = document.getElementById("potential-height").value;
            let potentialEnergy = getPotentialEnergy(mass, gravity, height);
            results.textContent = `${potentialEnergy} Joules`;
            break;
        }
        case "electric": {
            let voltage = document.getElementById("electric-voltage").value;
            let amperage = document.getElementById("electric-amperage").value;
            let time = document.getElementById("electric-time").value;
            let watts = getElectricWatts(voltage, amperage, time);
            results.textContent = `${watts} Watts`;
            break;
        }
        case "amperage": {
            let voltage = document.getElementById("amperage-voltage").value;
            let ohms = document.getElementById("amperage-ohms").value;
            let current = getAmperage(voltage, ohms);
            results.textContent = `${current} Amps`;
            break;
        }
        case "force": {
            let mass = document.getElementById("force-mass").value;
            let acceleration = document.getElementById("force-acceleration").value;
            let force = getForce(mass, acceleration);
            results.textContent = `${force} Newtons`;
            break;
        }
        case "acceleration": {
            let velocity = document.getElementById("acceleration-velocity").value;
            let initialVelocity = document.getElementById("acceleration-initialvelocity").value;
            let time = document.getElementById("acceleration-time").value;
            let acceleration = getAcceleration(velocity, initialVelocity, time);
            results.textContent = `${acceleration} m/s`;
            break;
        }
        case "impulse": {
            let force = document.getElementById("impulse-force").value;
            let time = document.getElementById("impulse-time").value;
            let impulse = getImpulse(force, time);
            results.textContent = `${impulse} Newton seconds`;
            break;
        }
        case "work": {
            let force = document.getElementById("work-force").value;
            let displacement = document.getElementById("work-displacement").value;
            let work = getWork(force, displacement);
            results.textContent = `${work} Joules`;
            break;
        }
        case "rest": {
            let mass = document.getElementById("rest-mass").value;
            let energy = getRest(mass);
            results.textContent = `${energy.toLocaleString()} Joules`;
            break;
        }
        default: {
            break;
        }
    }
}


