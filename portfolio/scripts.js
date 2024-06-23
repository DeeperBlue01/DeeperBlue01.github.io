function displayCV(xml) {
    const cvContent = document.getElementById('cv-content');
    cvContent.innerHTML = '';

    // Récupération des titres des rubriques en fonction de la langue actuelle
    const educationTitle = xml.querySelector('education').getAttribute('title');
    const experienceTitle = xml.querySelector('experience').getAttribute('title');
    const languagesTitle = xml.querySelector('languages').getAttribute('title');
    const interestsTitle = xml.querySelector('interests').getAttribute('title');
    const skillsTitle = xml.querySelector('skills').getAttribute('title');
    const technicalTitle = xml.querySelector('technical').getAttribute('title');

    // Affichage des titres des rubriques
    cvContent.innerHTML += `<h2>${educationTitle}</h2>`;
    xml.querySelectorAll('education entry').forEach(entry => {
        const year = entry.querySelector('year').textContent;
        const details = entry.querySelector('details').textContent;
        cvContent.innerHTML += `<p>${year} : ${details}</p>`;
    });

    cvContent.innerHTML += `<h2>${experienceTitle}</h2>`;
    xml.querySelectorAll('experience entry').forEach(entry => {
        const year = entry.querySelector('year').textContent;
        const details = entry.querySelector('details').textContent;
        cvContent.innerHTML += `<p>${year} : ${details}</p>`;
    });

    cvContent.innerHTML += `<h2>${languagesTitle}</h2>`;
    xml.querySelectorAll('languages entry').forEach(entry => {
        cvContent.innerHTML += `<p>${entry.textContent}</p>`;
    });

    cvContent.innerHTML += `<h2>${interestsTitle}</h2>`;
    xml.querySelectorAll('interests entry').forEach(entry => {
        cvContent.innerHTML += `<p>${entry.textContent}</p>`;
    });

    cvContent.innerHTML += `<h2>${skillsTitle}</h2>`;
    xml.querySelectorAll('skills entry').forEach(entry => {
        cvContent.innerHTML += `<p>${entry.textContent}</p>`;
    });

    cvContent.innerHTML += `<h2>${technicalTitle}</h2>`;
    xml.querySelectorAll('technical entry').forEach(entry => {
        cvContent.innerHTML += `<p>${entry.textContent}</p>`;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const cvLink = document.getElementById('cv-link');
    const homeSection = document.getElementById('home-section');
    const cvSection = document.getElementById('cv-section');
    const languageLinks = document.querySelectorAll('.language-link');
    let currentLang = 'fr';

    homeLink.addEventListener('click', function() {
        homeSection.style.display = 'block';
        cvSection.style.display = 'none';
        loadHomePage(currentLang);
    });

    cvLink.addEventListener('click', function() {
        homeSection.style.display = 'none';
        cvSection.style.display = 'block';
        loadCV(currentLang);
    });

    languageLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            loadHomePage(lang);
            if (cvSection.style.display === 'block') {
                loadCV(lang);
            }
        });
    });

    function loadHomePage(lang) {
        fetch(`home_${lang}.xml`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, "application/xml");
                displayHomePage(xml);
            })
            .catch(error => console.log(error));
    }

    function displayHomePage(xml) {
        const welcomeMessage = xml.querySelector('welcome').textContent;
        const homeTitle = xml.querySelector('home title').textContent;
        const homeDescription = xml.querySelector('home description').textContent;

        document.getElementById('welcome-message').textContent = welcomeMessage;
        document.getElementById('home-title').textContent = homeTitle;
        document.getElementById('home-description').textContent = homeDescription;
    }

    function loadCV(lang) {
        fetch(`cv_${lang}.xml`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, "application/xml");
                displayCV(xml);
            })
            .catch(error => console.log(error));
    }

    // Chargement de la langue par défaut au chargement de la page
    loadHomePage(currentLang);
});
