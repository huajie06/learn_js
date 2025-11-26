const clockFace = document.getElementById('clockFace');

// 1. Generate the 60 Ticks
for (let i = 0; i < 60; i++) {
  const tick = document.createElement('div');
  const angle = i * 6; // 360 degrees / 60 ticks = 6 degrees per tick

  // Determine if it's a Major (Hour) or Minor (Minute) tick
  if (i % 5 === 0) {
    tick.classList.add('tick', 'major-tick');
  } else {
    tick.classList.add('tick', 'minor-tick');
  }

  // THE MAGIC: Rotate the tick, then push it outward (TranslateY)
  // We push it out 140px (half the clock width minus padding)
  tick.style.transform = `rotate(${angle}deg) translateY(-140px)`;

  clockFace.appendChild(tick);
}

// 2. Generate the Numbers
for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.innerText = i;
  number.classList.add('number');

  const angle = i * 30; // 360 degrees / 12 hours = 30 degrees per hour

  // THE COUNTER-ROTATION TRICK:
  // 1. Rotate the container to the right angle (e.g., 90deg for 3 o'clock)
  // 2. Push it outward (translateY)
  // 3. Rotate the TEXT back (-90deg) so it stands upright
  number.style.transform = `rotate(${angle}deg) translateY(-110px) rotate(-${angle}deg)`;

  clockFace.appendChild(number);
}


const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function smoothClock() {
  const now = new Date();

  const milliseconds = now.getMilliseconds();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // 1. CALC SMOOTH SECONDS
  // We add the milliseconds fraction to the seconds
  // e.g., 10.5 seconds converts to degrees
  const smoothSeconds = seconds + (milliseconds / 1000);
  const secondsDegrees = (smoothSeconds / 60) * 360;

  // 2. CALC MINUTES
  // We stick to standard movement here, but add the seconds percentage
  // so the minute hand moves slowly rather than jumping
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;

  // 3. CALC HOURS
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  // Apply rotations
  // Note: We use the same 'translateX(-50%)' logic to keep alignment
  secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;

  // The Loop: specifically request the next frame
  requestAnimationFrame(smoothClock);
}

// Start the loop
requestAnimationFrame(smoothClock);