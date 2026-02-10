const year = new Date().getFullYear();
document.getElementById("copyright").textContent =
    `© ${year} | Anthony Lozano | WDD131`;

// Last modified
document.getElementById("modified").textContent =
    `Last Modified: ${document.lastModified}`;