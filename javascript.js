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




//------------------Validation For Email-----------------
const form = document.getElementById('contact-form')
const input = document.getElementById('email-input')
const span = document.getElementById('error-message')

form.addEventListener('submit', (event) => {
  if (input.value!==input.value.toLowerCase()) {
    event.preventDefault();
    span.innerHTML = "Please, use only lowercase letters for your email!";
  }
});


