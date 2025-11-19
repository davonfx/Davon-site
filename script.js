document.addEventListener("DOMContentLoaded", () => {
    // Map text links to section IDs
    const sectionMap = {
        "Window": "Window",
        "MacOs": "MacOs",
        "Extentions & scripts": "Extention&Scripts",
        "Tutoriels": null // ajoute la section si tu en as une
    };

    // Sélectionne tous les liens de la navbar
    const navLinks = document.querySelectorAll(".navLinks a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const linkText = link.textContent.trim();
            const targetID = sectionMap[linkText];

            if(targetID){
                const section = document.getElementById(targetID);
                if(section){
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});
