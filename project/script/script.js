const fields = [
    { name: "Field 1", price: 700, image: "images/field1.jpg" },
    { name: "Field 2", price: 650, image: "images/field2.jpg" },
    { name: "Field 3", price: 800, image: "images/field3.jpg" }
];

const container = document.getElementById("fieldsContainer");

if (container) {
    fields.forEach(field => {
        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
        <h2>${field.name}</h2>
        <img src="${field.image}" alt="Soccer Field" loading="lazy">
        <p>Price per hour: L ${field.price}</p>
        `;

        container.appendChild(card);
    });
}

const form = document.getElementById("reservationForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const selectedField = document.getElementById("field").value;

        let price = 700;
        if (time > "18:00") {
            price = 900;
        }

        const reservation = {
            name,
            date,
            time,
            field: selectedField,
            price
        };

        localStorage.setItem("reservation", JSON.stringify(reservation));

        document.getElementById("confirmation").textContent =
            `Reservation confirmed for ${name} on ${date} at ${time}. Total: L ${price}`;
    });
}
