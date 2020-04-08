const app = document.querySelector(".app");

const letters = [
  { keyboardInput: "A", dataKey: "65", sound: "clap" },
  { keyboardInput: "S", dataKey: "83", sound: "hihat" },
  { keyboardInput: "D", dataKey: "68", sound: "kick" },
  { keyboardInput: "F", dataKey: "70", sound: "openhat" },
  { keyboardInput: "G", dataKey: "71", sound: "boom" },
  { keyboardInput: "H", dataKey: "72", sound: "ride" },
  { keyboardInput: "J", dataKey: "74", sound: "snare" },
  { keyboardInput: "K", dataKey: "75", sound: "tom" },
  { keyboardInput: "L", dataKey: "76", sound: "tink" },
];

const x = letters
  .map((l) => {
    return `<section class="key" data-key=Key${l.keyboardInput}>
      <kbd>${l.keyboardInput}</kbd>
      <span class="sound">${l.sound.toUpperCase()}</span>
      </section>`;
  })
  .join(" ");

app.insertAdjacentHTML("beforeEnd", x);

const y = letters
  .map((s) => {
    return `<audio data-key=Key${s.keyboardInput} src="sounds/${s.sound}.wav"></audio>`;
  })
  .join("");

app.insertAdjacentHTML("beforeEnd", y);

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`section[data-key="${e.code}"]`);
  if (!audio) return;
  audio.attributes[0].value && key.attributes[1].value === e.code;
  audio.play();
  key.classList.add("playing");
};
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

// const foo = () => {
//   let x = (y = 0);
//   x++;
//   return x;
// };
// console.log(foo());
// console.log(typeof x);
// console.log(typeof y);

// function foo1() {
//   return {
//     hello: "world",
//   };
// }
// function foo2() {
//   return {
//     hello: "world",
//   };
// }
// console.log(foo1());
// console.log(foo2());

// let race = () => {
//   setTimeout(() => console.log("timeout"), 0);
//   setImmediate(() => console.log("immediate"));
//   process.nextTick(() => console.log("nextTick"));
//   console.log("current event loop");
// };
// race();

// console.log(typeof foo);
// var foo = 22;

// function foo(foo) {
//   return foo * 2;
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
