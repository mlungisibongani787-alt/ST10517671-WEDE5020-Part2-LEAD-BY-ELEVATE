// Run the script after the page has loaded.
document.addEventListener("DOMContentLoaded", function () {
    // Find the current page name.
    const page = location.pathname.split("/").pop().toLowerCase() || "index.html";

    // Mark the current page in the navigation.
    document.querySelectorAll("nav a").forEach(function (link) {
        const href = link.getAttribute("href").toLowerCase();
        if (href === page || (page === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });

    // Handle the enquiry form when it is on the page.
    const form = document.getElementById("enquiryForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const message = document.getElementById("formMessage");
            message.textContent = "Thank you. Your enquiry has been recorded for this Part 1 demonstration.";
            form.reset();
        });
    }
});
