const hamburgar = document.getElementById('hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const navClose = document.querySelectorAll('.mobile-nav-link');
const speakersGrid = document.querySelector('.grid-column');

const createSpeakersCard = () => {
  speakers.forEach((speaker) => {
    const speakerCard = document.createElement('div');
    const speakerImg = document.createElement('img');
    const detailCard = document.createElement('div');
    const speakerName = document.createElement('h4');
    const speakerTitle = document.createElement('p');
    const speakerBio = document.createElement('p');

    speakerCard.classList.add('speaker-card');
    speakerImg.classList.add('speaker-picture');
    detailCard.classList.add('speaker-detail');
    speakerName.classList.add('speaker-name');
    speakerTitle.classList.add('speaker-title');
    speakerBio.classList.add('speaker-bio');

    speakerCard.setAttribute('id', speaker.id);
    speakerImg.setAttribute('src', speaker.picture);
    speakerImg.setAttribute('alt', speaker.name);
    speakerName.innerText = speaker.name;
    speakerTitle.innerText = speaker.title;
    speakerBio.innerText = speaker.bio;

    detailCard.append(speakerName, speakerTitle, speakerBio);
    speakerCard.append(speakerImg, detailCard);
    speakersGrid.append(speakerCard);
  });
};

window.onload = () => {
  createSpeakersCard();
};

// Open and close mobile menu bar
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('open');
  hamburgar.classList.toggle('change');
};

const closeNav = () => {
  hamburgar.classList.remove('change');
  mobileMenu.classList.remove('open');
};

hamburgar.addEventListener('click', toggleMobileMenu);

navClose.forEach((elem) => {
  elem.addEventListener('click', closeNav);
});
