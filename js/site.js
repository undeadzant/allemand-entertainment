const availabilityForm = document.getElementById("availability-form");

availabilityForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(availabilityForm);

    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "Not provided";
    const eventType = formData.get("event-type") || "";
    const eventDate = formData.get("event-date") || "Not provided";
    const location = formData.get("location") || "Not provided";
    const message =
        formData.get("message") || "No additional details provided.";

    const subject =
        `Allemand Entertainment Inquiry - ${eventType} - ${name}`;

    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Event Type: ${eventType}
Event Date: ${eventDate}
Venue / Location: ${location}

Event Details:
${message}
    `.trim();

    const mailtoUrl =
        `mailto:YOUR_EMAIL_ADDRESS` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
});

const footerYear = document.getElementById("footer-year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}