const products = [
  {
    Name: "Wireless Headphones",
    Description: "High-quality wireless headphones with noise cancellation and long battery life.",
    Amount: 120.00,
    Image: "image/p-1.png"
  },
  {
    Name: "Smart Watch",
    Description: "Stylish smart watch with fitness tracking and message notifications.",
    Amount: 85.00,
    Image: "image/p12.png"
  },
  {
    Name: "Bluetooth Speaker",
    Description: "Portable Bluetooth speaker with deep bass and 12-hour playtime.",
    Amount: 45.00,
    Image: "image/mus.png"
  },
  {
    Name: "Gaming Mouse",
    Description: "Ergonomic gaming mouse with customizable DPI and RGB lighting.",
    Amount: 35.00,
    Image: "image/news-1.png"
  },
  {
    Name: "Laptop",
    Description: "Lightweight laptop with 8GB RAM, 512GB SSD, and a vivid display.",
    Amount: 650.00,
    Image: "image/laptop.png"
  },
  {
    Name: "PS5 with pad",
    Description: "Professional Playstation 5 with pad sensor.",
    Amount: 499.99,
    Image: "image/gam.png"
  },
   {
    Name: "Wireless Headphones",
    Description: "High-quality wireless headphones with noise cancellation and long battery life.",
    Amount: 120.00,
    Image: "image/image1.png"
  },
  {
    Name: "Smart Watch",
    Description: "Stylish smart watch with fitness tracking and message notifications.",
    Amount: 95.00,
    Image: "image/w.png"
  },
  {
    Name: "Bluetooth Speaker",
    Description: "Portable Bluetooth speaker with deep bass and 12-hour playtime.",
    Amount: 45.00,
    Image: "image/mus.png"
  },
  {
    Name: "Visual Gaming Mouse",
    Description: "Ergonomic gaming mouse with customizable DPI and RGB lighting.",
    Amount: 135.00,
    Image: "image/man2.png"
  },
  {
    Name: "Laptop",
    Description: "Lightweight laptop with 8GB RAM, 512GB SSD, and a vivid display.",
    Amount: 650.00,
    Image: "image/p10.png"
  },
  {
    Name: "DSLR Camera",
    Description: "Professional DSLR camera with 24MP sensor and 4K video recording.",
    Amount: 499.99,
    Image: "image/images.jfif"
  },
  {
    Name: "Wireless Headphones",
    Description: "High-quality wireless headphones with noise cancellation and long battery life.",
    Amount: 120.00,
    Image: "image/p-1.png"
  },
  {
    Name: "Smart Watch",
    Description: "Stylish smart watch with fitness tracking and message notifications.",
    Amount: 85.00,
    Image: "image/p-2.jpg"
  },
  {
    Name: "Bluetooth Speaker",
    Description: "Portable Bluetooth speaker with deep bass and 12-hour playtime.",
    Amount: 45.00,
    Image: "image/mus.png"
  },
  {
    Name: "Drone",
    Description: "Ergonomic Drone with customizable DPI and RGB lighting.",
    Amount: 35.00,
    Image: "image/i1.png"
  },
  {
    Name: "Laptop",
    Description: "Lightweight laptop with 8GB RAM, 512GB SSD, and a vivid display.",
    Amount: 650.00,
    Image: "image/laptop.png"
  },
  {
    Name: "DSLR Camera",
    Description: "Professional DSLR camera with 24MP sensor and 4K video recording.",
    Amount: 499.99,
    Image: "image/images.jfif"
  },
   {
    Name: "Wireless Headphones",
    Description: "High-quality wireless headphones with noise cancellation and long battery life.",
    Amount: 120.00,
    Image: "image/p-3.jpg"
  },
  {
    Name: "Smart Watch",
    Description: "Stylish smart watch with fitness tracking and message notifications.",
    Amount: 185.00,
    Image: "image/news-2.png"
  },
  {
    Name: "Bluetooth Speaker",
    Description: "Portable Bluetooth speaker with deep bass and 12-hour playtime.",
    Amount: 45.00,
    Image: "image/mus.png"
  },
  {
    Name: "Playstation 5",
    Description: "Ergonomic gaming station with customizable DPI and RGB lighting.",
    Amount: 475.00,
    Image: "image/news-1.png"
  },
  {
    Name: "Laptop",
    Description: "Lightweight laptop with 8GB RAM, 512GB SSD, and a vivid display.",
    Amount: 550.00,
    Image: "image/laptop.png"
  },
  {
    Name: "DSLR Camera",
    Description: "Professional DSLR camera with 24MP sensor and 4K video recording.",
    Amount: 499.99,
    Image: "image/i1.png"
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
    <span class="amount">$${product.Amount.toFixed(2)}</span>
    <button class="add-to-cart-btn">Add to Cart</button>
  `;
  container.appendChild(box);
});

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

// ...existing code...

// Event delegation for dynamically created "Add to Cart" buttons
container.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart-btn')) {
    // Find the product info from the DOM
    const box = e.target.closest('.box');
    const name = box.querySelector('h3').textContent;
    const description = box.querySelector('p').textContent;
    const amount = parseFloat(box.querySelector('.amount').textContent.replace('$', ''));
    const img = box.querySelector('img').getAttribute('src');
    const id = name.replace(/\s+/g, '-').toLowerCase(); // simple unique id

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, name, description, price: amount, img, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  }
});

// ...existing code...