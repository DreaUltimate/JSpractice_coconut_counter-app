const bodyEl = document.querySelector(".container");

bodyEl.innerHTML = `
  <h1>Coconut Counter:</h1>
  <p class="digit" id="counter">0</p>
  <div class="operators">
    <button class="operator-btn" onclick="increment()">+</button>
    <button class="operator-btn" onclick="decrement()">-</button>
  </div>
  <div class="function-buttons">
    <button class="btn" onclick="save()">Save</button>
    <button class="btn" onclick="reset()">Reset</button>
  </div>
  <p style="font-size: xx-large;" id="saved-el">Previous Entry: </p>
`;

const counterEl = document.getElementById("counter");
const savedEl = document.getElementById("saved-el");
let count = 0;

increment = () => {
  count += 1;
  counterEl.innerHTML = count;
};

decrement = () => {
  count -= 1;
  counterEl.innerHTML = count;
};

reset = () => {
  count = 0;
  counterEl.innerHTML = count;
  savedEl.textContent = "Previous Entry: ";
};

save = () => {
  savedEl.textContent += ` ${count} - `;
  count = 0;
  counterEl.innerHTML = count;
};
