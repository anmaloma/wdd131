const products = [
    { id: "fc-1888", name: "field 1", averagerating: 4.5 },
    { id: "fc-2050", name: "field 2", averagerating: 4.7 },
    { id: "fs-1987", name: "field 3", averagerating: 3.5 },
    { id: "ac-2000", name: "field 4", averagerating: 3.9 },
    { id: "jj-1969", name: "field 5", averagerating: 5.0 }
];

const select = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});
