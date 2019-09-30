const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'https://www.travelportland.com/wp-content/uploads/2013/08/Latourell-Falls_Michael-Matti-via-Flickr.jpg')

const links = document.querySelectorAll('a');
links[0].textContent = siteContent.nav['nav-item-1'];
links[0].style.color = 'green';
links[1].textContent = siteContent.nav['nav-item-2'];
links[1].style.color = 'green';
links[2].textContent = siteContent.nav['nav-item-3'];
links[2].style.color = 'green';
links[3].textContent = siteContent.nav['nav-item-4'];
links[3].style.color = 'green';
links[4].textContent = siteContent.nav['nav-item-5'];
links[4].style.color = 'green';
links[5].textContent = siteContent.nav['nav-item-6'];
links[5].style.color = 'green';

let header = document.getElementById("cta-img");
header.setAttribute('src', 'https://fpdcc.com/wp-content/uploads/2019/01/cap-sauers-chad-reno-jun18.jpg')

let middle = document.getElementById("middle-img");
middle.setAttribute('src', 'https://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg')

const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;
console.log(h1);

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;
console.log(button);


const fh4 = siteContent['main-content']['features-h4'];
const fc = siteContent['main-content']['features-content'];
const ah4 = siteContent['main-content']['about-h4'];
const ac = siteContent['main-content']['about-content'];
const sh4 = siteContent['main-content']['services-h4'];
const sc = siteContent['main-content']['services-content'];
const ph4 = siteContent['main-content']['product-h4'];
const pc = siteContent['main-content']['product-content'];
const vh4 = siteContent['main-content']['vision-h4'];
const vc = siteContent['main-content']['vision-content'];
const ch4 = siteContent['contact']['contact-h4'];
const address = siteContent['contact']['address'];
const phone = siteContent['contact']['phone'];
const email = siteContent['contact']['email'];
const footer = siteContent['footer']['copyright'];

const h4 = document.querySelectorAll('h4');
h4[0].textContent = fh4;
h4[1].textContent = ah4;
h4[2].textContent = sh4;
h4[3].textContent = ph4;
h4[4].textContent = vh4;
h4[5].textContent = ch4;

const p = document.querySelectorAll('p');
p[0].textContent = fc;
p[1].textContent = ac;
p[2].textContent = sc;
p[3].textContent = pc;
p[4].textContent = vc;
p[5].textContent = address;
p[6].textContent = phone;
p[7].textContent = email;
p[8].textContent = footer;

const node = document.createElement("P");
const textnode = document.createTextNode("This is a paragraph");
node.appendChild(textnode);
document.querySelector('nav').appendChild(node);

const node2 = document.createElement("a");
const textnode2 = document.createTextNode("This is a link");
node2.prepend(textnode2);
document.querySelector('nav').prepend(node2);