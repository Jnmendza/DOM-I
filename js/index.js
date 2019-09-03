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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// HEADER
const nl = document.querySelectorAll('a');

const arr = Array.from(nl);

arr[0].textContent = 'Services'
arr[0].style.color = 'green'
arr[1].textContent = 'Product'
arr[1].style.color = 'green'
arr[2].textContent = 'Vision'
arr[2].style.color = 'green'
arr[3].textContent = 'Features'
arr[3].style.color = 'green'
arr[4].textContent = 'About'
arr[4].style.color = 'green'
arr[5].textContent = 'Contact'
arr[5].style.color = 'green'

// ADDING TWO NEW LINKS TO NAV BAR
const navBar = document.querySelector('header nav');

const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
navBar.appendChild(blogLink)

const testLink = document.createElement('a')
testLink.textContent = 'Testimonials'
navBar.appendChild(testLink)


// CTA
const title = document.querySelector('.cta .cta-text h1')

title.textContent = 'DOM IS AWESOME'

// BUTTON
const button = document.querySelector('.cta .cta-text button')

button.textContent = 'Get Started'

// IMAGE
const mainImg = document.getElementById('cta-img')
mainImg.setAttribute('src', 'img/header-img.png')

//TOP CONTENT FEATURES AND ABOUT
const topContentH4 = document.querySelectorAll('.top-content .text-content h4')
topContentH4[0].textContent = 'Features'
topContentH4[1].textContent = 'About'

const topContentP = document.querySelectorAll('.top-content .text-content p')
topContentP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topContentP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg = document.querySelector('.middle-img')
middleImg.setAttribute('src', 'img/mid-page-accent.jpg')

//BOTTOM CONTENT SERVICES, PRODUCT AND VISION
const bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4')
bottomContentH4[0].textContent = 'Services'
bottomContentH4[1].textContent = 'Product'
bottomContentH4[2].textContent = 'Vision'

bottomContentP = document.querySelectorAll('.bottom-content .text-content p')
bottomContentP[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContentP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContentP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//CONTACT
const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = 'Contact'

const contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = '123 Way 456 Street Somewhere, USA'
contactP[1].textContent = '1 (888) 888-8888'
contactP[2].textContent = 'sales@greatidea.io'

//FOOTER
const footerP = document.querySelector('footer p')
footerP.textContent = 'Copyright Great Idea! 2018'