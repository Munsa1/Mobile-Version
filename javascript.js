const body = document.getElementById('body-project');
const menu = document.createElement('div');
menu.className = 'menu-style';
body.appendChild(menu);

const icon = document.createElement('i');
icon.className = 'fa fa-times';
icon.id = 'x-close';
menu.appendChild(icon);

const menuList = document.createElement('ul');
menuList.className = 'menu-list';
menu.appendChild(menuList);

const portfolio = document.createElement('li');
portfolio.className = 'portfolio';
const portfolioLink = document.createElement('a');
portfolioLink.className = 'mobile-a';
portfolioLink.textContent = 'Portfolio';
portfolioLink.href = '#portfolio-section';
portfolio.appendChild(portfolioLink);
menuList.appendChild(portfolio);

const about = document.createElement('li');
about.className = 'mobile-about';
const aboutLink = document.createElement('a');
aboutLink.className = 'mobile-a';
aboutLink.textContent = 'About';
aboutLink.href = '#about-section';
about.appendChild(aboutLink);
menuList.appendChild(about);

const contact = document.createElement('li');
contact.className = 'contatc-content';
const contactLink = document.createElement('a');
contactLink.textContent = 'Contact';
contactLink.className = 'mobile-a';
contactLink.href = '#contact-section';
contact.appendChild(contactLink);
menuList.appendChild(contact);

const bars = document.getElementById('bars');
bars.addEventListener('click', () => {
  menu.style.display = 'block';
});

const close = document.getElementById('x-close');
close.addEventListener('click', () => {
  menu.style.display = 'none';
});

document.getElementsByClassName('mobile-a')[0].addEventListener('click', () => {
  menu.style.display = 'none';
});

document.getElementsByClassName('mobile-a')[1].addEventListener('click', () => {
  menu.style.display = 'none';
});

document.getElementsByClassName('mobile-a')[2].addEventListener('click', () => {
  menu.style.display = 'none';
});

const projects = [
  {
    id: 0,
    name: 'Tonic',
    companyName: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: './img/project0.png',
      alt: 'Tonic screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    companyName: 'FACEEBOOK',
    position: 'Full Stack Dev',
    year: 2015,
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    image: {
      link: './img/project4.png',
      alt: 'Multi-Post Stories screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 2,
    name: 'Facebook 360',
    companyName: 'FACEEBOOK',
    position: 'Full Stack Dev',
    year: 2015,
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: './img/project1.png',
      alt: 'Facebook 360screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 3,
    name: 'Uber Navigation',
    companyName: 'Uber',
    position: 'Lead Developer',
    year: 2018,
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    image: {
      link: './img/project2.png',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
];

const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

function showDetails(projectIndex) {
   const projectsCode = `
  <div class="details-container">
  <span id="closeDetails"><i class="fa fa-times closeDetails"></i></span>
  <img src="${projects[projectIndex].image.link}" alt="${projects[projectIndex].image.alt}" />
  <h2 class="project-title">${projects[projectIndex].name}</h2>
 
  <div class="project-info">
  <p class="description">
    ${projects[projectIndex].description}
  </p>

    <div class="tech-and-buttons">
      <ul class="languages">
      ${(function usedTech() {
    return projects[projectIndex].technologies.map((tech) => `<li class="language">${tech}</li>`).join('');
  }())}
      </ul>
      <div class="buttons">
        <a href="${projects[projectIndex].liveSource}" class="btn">See Live <i class="fa fa-external-link"></i></a>
        <a href="${projects[projectIndex].sourceCode}" class="btn">See Source <i class="fa fa-github"></i></a>
      </div>

    </div>
  </div>
  </div>`;

  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
  });
}

const portfolioDynamic = document.getElementById('portfolio-section');
const projectList = document.createElement('ul');
projectList.className = 'card-container';
portfolioDynamic.appendChild(projectList);

let projectsCard = '';
for (let j=0; j<projects.length; j++){
  projectsCard+=`
  <li class="card">
    <div class="card-content">
    <h4 class="card-heading">${projects[j].name}</h4>
    <ul class="card-buttons">
    ${(function usedTech() {
      let btns = '';
      for (let i=0; i<projects[j].technologies.length; i++){
        btns+=`<li ><button type="button">${projects[j].technologies[i]}</button></li>`;
      }
    return btns;
  }())}

    </ul>
    
        <button class="green-button details-btn" type="button" data-id="${projects[j].id}">See Project</button>
  </div>
</li>`
}


projectList.innerHTML = projectsCard;

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    });
});