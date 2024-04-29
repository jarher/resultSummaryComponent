async function getData() {
  const res = await fetch("../../data.json");
  return res.json();
}
function asignClass(category) {
  if (category === "Reaction") return "reaction-dt";
  if (category === "Memory") return "memory-dt";
  if (category === "Verbal") return "verbal-dt";
  if (category === "Visual") return "visual-dt";
}

function template({ category, score }) {
  return `<dt class="${asignClass(category)}">${category}</dt>
        <dd><b>${score}</b> / 100</dd>`;
}
async function insertInDOM() {
  const res = await getData();
  const categories = res.reduce(
    (acc, current) => (acc += template(current)),
    ""
  );
  document.querySelector("dl").innerHTML = categories;
}

insertInDOM();
