const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  let hours = now.getHours();
  hours = hours <= 11 ? hours : hours - 12;
  secondHand.style.cssText = `transform: rotate(${90 + now.getSeconds() * (360 / 60)}deg);`;
  minHand.style.cssText = `transform: rotate(${90 + now.getMinutes() * (360 / 60)}deg);`;
  hourHand.style.cssText = `transform: rotate(${90 + hours * (360 / 12)}deg);`
}
setInterval(setDate, 1000);