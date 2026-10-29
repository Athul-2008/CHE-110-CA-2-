const sortingGuide = {
  "banana peel": {
    category: "biodegradable",
    advice: "Biodegradable — place it in a food-scraps or compost bin."
  },
  "plastic bottle": {
    category: "recyclable",
    advice: "Recyclable — empty it and check your local recycling rules."
  },
  "old battery": {
    category: "hazardous",
    advice: "Hazardous — take it to a battery collection point; don’t put it in regular trash."
  },
  "smartphone": {
    category: "electronic",
    advice: "Electronic waste — use an e-waste or electronics take-back program."
  },
  "paper cup": {
    category: "recyclable",
    advice: "Check local rules: paper cups may need special recycling because of their lining."
  },
  "paint can": {
    category: "hazardous",
    advice: "May be hazardous — follow local paint disposal guidance and don’t pour paint down a drain."
  }
};

const form = document.querySelector("#sort-form");
const input = document.querySelector("#item");
const result = document.querySelector("#result");

function sortItem(value) {
  const item = value.trim().toLowerCase();

  if (!item) {
    result.textContent = "Type an item first, such as “banana peel”.";
    result.removeAttribute("data-category");
    return;
  }

  const match = sortingGuide[item];

  if (match) {
    result.textContent = match.advice;
    result.dataset.category = match.category;
  } else {
    result.textContent =
      `No exact match for “${value.trim()}”. Check your local waste guidelines.`;
    result.removeAttribute("data-category");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sortItem(input.value);
});

document.querySelectorAll("[data-item]").forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.item;
    sortItem(input.value);
  });
});
