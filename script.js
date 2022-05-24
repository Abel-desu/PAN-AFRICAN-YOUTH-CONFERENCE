// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener('click', (event) => toggleMenu(event, false)));

// dynamic speakers insertion
const speakers = [
  {
    name: 'Nahom Minas',
    title: 'President and Commander-in-Chief of the Federal Republic of Nigeria, Nigeria',
    image: '../images/minas.jpg',
    bio: 'Professor Nahom was the 2019 Claude Ake Chair at Uppsala University and Nordic Africa Institute, Sweden, and a Fellow of the Stellenbosch Institute of Advanced Studies in South Africa.',
  },
  {
    name: 'Tolawak Oli',
    title: 'Department of socio-economic transformation, South Africa',
    image: '../images/toli.jpg',
    bio: 'Tolawak Oli teached at Peking University for 18 years and then is teaching at Nanjing University.',
  },
  {
    name: 'zelalem fissha',
    title: 'Director of Pan African youth collaboration, Ethiopia',
    image: '../images/91027080.jpg',
    bio: 'he holds a PhD in Political Science from Addis Abeba University',
  },
  {
    name: 'Lwazi Lushaba',
    title: 'University of the Witwatersrand , Witwatersrand',
    image: '../images/img_20160922_0022.jpg',
    bio: 'he holds a PhD in Political Science from the University of the Witwatersrand, Johannesburg, South Africa. ',
  },

];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src=".images/${speaker.image}" alt="speaker" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// show more speakers by clicking on more button
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelectorAll('.mobile-hide').forEach((el) => {
    el.classList.toggle('mobile-hide');
  });
  moreSpeakerButton.style.display = 'none';
});
