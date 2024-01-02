const EXERCISES = 5;
const exercises = [
  "Band walks",
  "Abdominal roll outs",
  "Banded squats",
  "Banded bridges",
  "Hip flexor stretch",
  "Step downs",
  "Lateral lunges",
  "Ball bridges",
  "Single leg ball bridge",
  "Mini skate jumps",
];

const button = document.querySelector("#pick");

button.addEventListener("click", () => {
  // On click, pick three random exercises and populate the list at ul#list with those three items
  const list = document.querySelector("#list");
  list.innerHTML = "";

  const availableIndexes = Array.from(Array(exercises.length).keys());
  for (let i = 0; i < EXERCISES; i++) {
    // Pick a random index from the available indexes
    const randomIndex = availableIndexes.splice(
      Math.floor(Math.random() * availableIndexes.length),
      1
    )[0];
    // Create a new list item element and set its text to the exercise at the random index
    const li = document.createElement("li");
    li.innerText = exercises[randomIndex];
    // Append the list item to the ul#list
    list.appendChild(li);
  }
});
