
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const roles = [
        "Aspiring Data Analyst",
        "Power BI Enthusiast",
        "Python & SQL Learner",
        "Machine Learning Enthusiast"
    ];

    const typed = document.getElementById("typedRoles");
    let roleIndex = 0;

    if (typed) {
        setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            typed.textContent = roles[roleIndex];
        }, 2200);
    }

    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!contactForm.checkValidity()) {
                contactForm.classList.add("was-validated");
                return;
            }

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            );

            window.location.href =
                `mailto:omkaryadav12oy@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
