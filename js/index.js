const products = [
  {
    Name: "Eng. Chibuikem Nwagu",
    Description: "Senior Technology Consultant with 10+ years of experience architecting and delivering scalable web, cloud, and IoT solutions.",
    Amount: 120.00,
    Image: "image/chi.jpg"
  },
  {
    Name: "Eng. Taye Otaru Peter",
    Description: "Senior Electrical and Electronics Consultant with 10+ years of experience.",
    Amount: 85.00,
    Image: "image/taye.jpg"
  },
  {
    Name: "Miss Tope Victoria Sunday",
    Description: "Senior Quality Assurance Consultant with 5+ years experience in electronics",
    Amount: 45.00,
    Image: "image/tope.jpg"
  },
  {
    Name: "Eng. Onigba Harrison Ogheneyoma",
    Description: "Senior Technical Consultant with 10+ years of experience.",
    Amount: 35.00,
    Image: "image/Harr.jpg"
  }
];



// Select the container where you want to display the boxes
const container = document.querySelector('.products-container');

// Generate HTML for each product and insert into the container
products.forEach(product => {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = `
    <img src="${product.Image}" alt="${product.Name}">
    <h3>${product.Name}</h3>
    <p>${product.Description}</p>
    
  `;
  container.appendChild(box);
});
// Image slider
const slides = document.querySelectorAll('.slider-img');
let current = 0;
let prev = slides.length - 1;

function showSlide(next) {
  slides[prev].classList.remove('prev');
  slides[current].classList.remove('active');
  slides[current].style.left = '100%';

  prev = current;
  current = next;

  slides[prev].classList.add('prev');
  slides[prev].style.left = '-100%';
  slides[current].classList.add('active');
  slides[current].style.left = '0';
}

setInterval(() => {
  let next = (current + 1) % slides.length;
  showSlide(next);
}, 3000);

// Initialize positions
slides.forEach((slide, idx) => {
  slide.style.left = idx === 0 ? '0' : '100%';
});
slides[0].classList.add('active');

// Show login modal
document.getElementById("login-link").onclick = function(e) {
  e.preventDefault();
  document.getElementById("login_form").style.display = "flex";
};
// Hide login modal
document.getElementById("close-login").onclick = function() {
  document.getElementById("login_form").style.display = "none";
};
// Optional: Hide modal when clicking outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById("login_form");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// Show register modal
document.getElementById("show-register").onclick = function(e) {
  e.preventDefault();
  document.getElementById("login_form").style.display = "none";
  document.getElementById("register_form").style.display = "flex";
};
// Show login modal from register
document.getElementById("show-login").onclick = function(e) {
  e.preventDefault();
  document.getElementById("register_form").style.display = "none";
  document.getElementById("login_form").style.display = "flex";
};
// Close register modal
document.getElementById("close-register").onclick = function() {
  document.getElementById("register_form").style.display = "none";
};


const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
  closeMenu.classList.add('active');
  hamburger.classList.add('hide');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
  closeMenu.classList.remove('active');
  hamburger.classList.remove('hide');
});

const track = document.querySelector('.gallery-track');
const images = document.querySelectorAll('.gallery-img');
const prevBtn = document.querySelector('.gallery-btn.prev');
const nextBtn = document.querySelector('.gallery-btn.next');
let index = 0;

function updateGallery() {
  track.style.transform = `translateX(-${index * 600}px)`;
}

prevBtn.onclick = () => {
  index = (index - 1 + images.length) % images.length;
  updateGallery();
};

nextBtn.onclick = () => {
  index = (index + 1) % images.length;
  updateGallery();
};