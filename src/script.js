document.addEventListener('change', () => {
  const energySelect = document.getElementById('energy-select').value;
  showOnly(energySelect);
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') document.getElementById('btn').click();
});

function showOnly(_div)
{
  console.log(_div)
  const energyOptions = document.getElementById('energy-select').options;
  for (key in energyOptions) {
    if (isNaN(key)) break;
    if (energyOptions[key].value == _div) {
      document.getElementById(energyOptions[key].value).style.visibility = 'visible';
    } else {
      document.getElementById(energyOptions[key].value).style.visibility = 'hidden';
    }
  }
  return 0;
}

function getKinetic(mass, velocity, distance=null) {
  let joules;
  if (distance != null && distance > 0) {
    joules = (0.5 * mass * velocity**2) / distance;
  } else {
    joules = (0.5 * mass * velocity**2);
  }
  return joules;
}

function getPotential(mass, g, height, distance=null) {
  let joules;
  if (distance != null && distance > 0) {
    joules = (mass * g * height) / distance;
  } else {
    joules = (mass * g * height);
  }
  return joules;
}

function getElectric(volt, amp, time) {
  const watt = volt * amp * time;
  return watt;
}

function getForce(mass, acceleration) {
  const newtons = mass * acceleration;
  return newtons;
}

function getAcceleration(starting, final, time) {
  const acceleration = ( final - starting ) / time;
  return acceleration;
}

function getImpulse(force, time) {
  const newtonSecond = force * time;
  return newtonSecond;
}

function getWork(force, displacement) {
  const joules = force * displacement;
  return joules;
}

function calculate() {
  const energySelect = document.getElementById('energy-select').value;
  const result = document.getElementById('result');
  switch (energySelect) {
    case 'kinetic': {
      const mass = document.getElementById('kinetic-mass').value, velocity = document.getElementById('kinetic-velocity').value, distance = document.getElementById('kinetic-distance').value;
      if (distance != null) {
        result.textContent = `${getKinetic(mass, velocity, distance)} Newtons`;
      } else {
        result.textContent = `${getKinetic(mass, velocity)} Joules`;
      }
      break;
    }
    case 'potential': {
      const mass = document.getElementById('potential-mass').value, g = document.getElementById('potential-g').value, height = document.getElementById('potential-height').value,
        distance = document.getElementById('potential-distance').value;
      if (distance != null) {
        result.textContent = `${getPotential(mass, g, height, distance)} Newtons`;
      } else {
        result.textContent = `${getPotential(mass, g, height)}`;
      }
      break;
    }
    case 'electric': {
      const volt = document.getElementById('electric-voltage').value, amp = document.getElementById('electric-amps').value, time = document.getElementById('electric-time').value;
      result.textContent = `${getElectric(volt, amp, time)} Watts`;
      break;
    }
    case 'force': {
      const mass = document.getElementById('force-mass').value, acceleration = document.getElementById('force-acceleration').value;
      result.textContent = `${getForce(mass, acceleration)} Newtons`;
      break;
    }
    case 'acceleration': {
      const final = document.getElementById('acceleration-final').value, start = document.getElementById('acceleration-start').value,
        time = document.getElementById('acceleration-time').value;
        result.textContent = `${getAcceleration(start, final, time)} m/s^2`;
        break;
    }
    case 'impulse': {
      const force = document.getElementById('impulse-mass').value, time = document.getElementById('impulse-time').value;
      result.textContent = `${getImpulse(force, time)} Newton Seconds`;
      break;
    }
    case 'work': {
      const force = document.getElementById('work-force').value, displacement = document.getElementById('work-displacement').value;
      result.textContent = `${getWork(force, displacement)} Joules`;
      break;
    }
  }
  return 0;
}
