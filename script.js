
// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const nav = document.getElementById("nav");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("nav").classList.remove("active");

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .service-card, .experience-card, .education-card"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});



// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const nav = document.getElementById("nav");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("nav").classList.remove("active");

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .service-card, .experience-card, .education-card"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});

