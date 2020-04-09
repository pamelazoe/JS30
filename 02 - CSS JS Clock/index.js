const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const hours = now.getHours();
  const hour = hours > 12 ? hours - 12 : hours;
  const minutes = now.getMinutes();

  const minutesDegrees = (minutes / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const hoursDegrees = (360 / 12) * hour + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
};
setInterval(setDate, 1000);
