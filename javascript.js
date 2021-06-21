let body = document.getElementById("body-project");
let menu = document.createElement("div");
menu.className = "menu-style";
body.appendChild(menu);

let icon = document.createElement("i");
icon.className = "fa fa-times";
menu.appendChild(icon);

let menuList = document.createElement("ul");
menuList.className = "menu-list";
menu.appendChild(menuList);

let portfolio = document.createElement("li");
portfolio.className = "portfolio";
let portfolioLink = document.createElement("a");
portfolioLink.className="mobile-a";
portfolioLink.textContent = "Portfolio";
portfolioLink.href = "#portfolio";
portfolio.appendChild(portfolioLink);
menuList.appendChild(portfolio);

let about = document.createElement("li");
about.className = "mobile-about";
let aboutLink = document.createElement("a");
aboutLink.className="mobile-a";
aboutLink.textContent = "About";
aboutLink.href = "#about";
about.appendChild(aboutLink);
menuList.appendChild(about);

let contact = document.createElement("li");
contact.className = "contatc-content";
let contactLink = document.createElement("a");
contactLink.textContent = "Contact";
contactLink.className="mobile-a";
contactLink.href = "#contact";
contact.appendChild(contactLink);
menuList.appendChild(contact);
