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

    function displayCV(xml) {
        const cvContent = document.getElementById('cv-content');
        cvContent.innerHTML = '';

        const personal = xml.querySelector('personal');
        const education = xml.querySelector('education');
        const experience = xml.querySelector('experience');
        const languages = xml.querySelector('languages');
        const interests = xml.querySelector('interests');
        const skills = xml.querySelector('skills');
        const technical = xml.querySelector('technical');

        const name = personal.querySelector('name').textContent;
        const address = personal.querySelector('address').textContent;
        const email = personal.querySelector('email').textContent;

        cvContent.innerHTML += `<h3>${name}</h3>`;
        cvContent.innerHTML += `<p><strong>Address:</strong> ${address}</p>`;
        cvContent.innerHTML += `<p><strong>Email:</strong> ${email}</p>`;

        cvContent.innerHTML += '<h4>Formation</h4>';
        education.querySelectorAll('entry').forEach(entry => {
            const year = entry.querySelector('year').textContent;
            const details = entry.querySelector('details').textContent;
            cvContent.innerHTML += `<p>${year} : ${details}</p>`;
        });

        cvContent.innerHTML += '<h4>Expériences professionnelles</h4>';
        experience.querySelectorAll('entry').forEach(entry => {
            const year = entry.querySelector('year').textContent;
            const details = entry.querySelector('details').textContent;
            cvContent.innerHTML += `<p>${year} : ${details}</p>`;
        });

        cvContent.innerHTML += '<h4>Langues</h4>';
        languages.querySelectorAll('entry').forEach(entry => {
            cvContent.innerHTML += `<p>${entry.textContent}</p>`;
        });

        cvContent.innerHTML += '<h4>Centres d’intérêt</h4>';
        interests.querySelectorAll('entry').forEach(entry => {
            cvContent.innerHTML += `<p>${entry.textContent}</p>`;
        });

        cvContent.innerHTML += '<h4>Soft skills</h4>';
        skills.querySelectorAll('entry').forEach(entry => {
            cvContent.innerHTML += `<p>${entry.textContent}</p>`;
        });

        cvContent.innerHTML += '<h4>Compétences techniques</h4>';
        technical.querySelectorAll('entry').forEach(entry => {
            cvContent.innerHTML += `<p>${entry.textContent}</p>`;
        });
    }

    // Load the default language on page load
    loadHomePage(currentLang);
});
