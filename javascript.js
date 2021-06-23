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
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    liveSource: '#',
    sourceCode: '#',
  },
];
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
    
        <button class="green-button" type="button" data-id="${projects[j].id}">See Project</button>
  </div>
</li>`
}


projectList.innerHTML = projectsCard;