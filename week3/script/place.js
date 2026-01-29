document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(tempF, speedMph) {
    return (35.74 + 0.6215 * tempF - 35.75 * speedMph ** 0.16 + 0.4275 * tempF * speedMph ** 0.16).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windChillSpan = document.getElementById("windchill");

if (temp <= 50 && wind > 3) {
    windChillSpan.textContent = calculateWindChill(temp, wind) + " °F";
} else {
    windChillSpan.textContent = "N/A";
}

