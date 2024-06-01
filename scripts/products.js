
const products = [
    {
        image: '/img/Cap1.png',
        title: 'Puma FUTURE 7 MATCH MG',
        category: 'Chimpunes',
        description: 'Descripción del productoDescripción del producto ',
        price: 349.00,
        gender: 'Masculino',
        brand: 'Puma',
        sport: 'Futbol'
    },
    {
        image: '/img/Cap2.png',
        title: 'Gorra Nike Club',
        category: 'Gorros',
        description: 'Descripción del producto 2',
        price: 89.70,
        gender: 'Femenino',
        brand: 'Nike',
        sport: 'Runing' 
    },
    {
        image: '/img/Cap3.png',
        title: 'Leggings ANIMAL REMIX',
        category: 'Pantalones',
        description: 'Descripción del producto 2',
        price: 125.30,
        gender: 'Femenino',
        brand: 'Puma',
        sport: 'Runing' 
    },
    {
        image: '/img/Cap4.png',
        title: 'Nike Phantom Luna 2 Elite',
        category: 'Chimpunes',
        description: 'Descripción del producto 2',
        price: 899.90,
        gender: 'Masculino',
        brand: 'Nike',
        sport: 'Futbol' 
    },
    {
        image: '/img/Cap5.png',
        title: 'Nike Brasilia 9.5',
        category: 'Mochilas',
        description: 'Descripción del producto 2',
        price: 189.90,
        gender: 'Masculino',
        brand: 'Nike',
        sport: 'Runing'
    },
    {
        image: '/img/Cap6.png',
        title: 'Bolso training MDFT',
        category: 'Mochilas',
        description: 'Descripción del producto 2',
        price: 149.40,
        gender: 'Masculino',
        brand: 'Puma',
        sport: 'Runing'
    },
    {
        image: '/img/Cap7.png',
        title: 'Casaca Beckenbauer',
        category: 'Chompas',
        description: 'Descripción del producto 2',
        price: 210.50,
        gender: 'Femenino',
        brand: 'Adidas',
        sport: 'Runing'
    },
    {
        image: '/img/Cap8.png',
        title: 'Nike Dri-FIT Pro',
        category: 'Gorros',
        description: 'Descripción del producto 2',
        price: 149.40,
        gender: 'Masculino',
        brand: 'Nike',
        sport: 'Runing'
    },
    {
        image: '/img/Cap9.png',
        title: 'Casaca Terrex Trail',
        category: 'Chompas',
        description: 'Descripción del producto 2',
        price: 279.90,
        gender: 'Femenino',
        brand: 'Adidas',
        sport: 'Runing'
    },
    {
        image: '/img/Cap10.png',
        title: 'Puma x NEYMAR FUTURE 7',
        category: 'Chimpunes',
        description: 'Descripción del producto 2',
        price: 369.50,
        gender: 'Masculino',
        brand: 'Puma',
        sport: 'Futbol'
    },
    {
        image: '/img/Cap11.png',
        title: 'Bra 4 KEEPS',
        category: 'Tops',
        description: 'Descripción del producto 2',
        price: 99.90,
        gender: 'Femenino',
        brand: 'Puma',
        sport: 'Runing'
    },
    {
        image: '/img/Cap12.png',
        title: 'Nike Tiempo Legend 10 Elite',
        category: 'Chimpunes',
        description: 'Descripción del producto 2',
        price: 259.50,
        gender: 'Masculino',
        brand: 'Nike',
        sport: 'Futbol'
    },
    {
        image: '/img/Cap13.png',
        title: 'Guantes Ultra Ultimate Hybrid',
        category: 'Guantes',
        description: 'Descripción del producto 2',
        price: 245.90,
        gender: 'Masculino',
        brand: 'Puma',
        sport: 'Futbol'
    },
    {
        image: '/img/Cap14.png',
        title: 'Nike Air Max Alpha Trainer 5',
        category: 'Zapatillas',
        description: 'Descripción del producto 2',
        price: 339.90,
        gender: 'Masculino',
        brand: 'Nike',
        sport: 'Runing'
    },
    {
        image: '/img/Cap15.png',
        title: 'Adidas Graphics',
        category: 'Chompas',
        description: 'Descripción del producto 2',
        price: 279.80,
        gender: 'Femenino',
        brand: 'Adidas',
        sport: 'Runing'
    },
    {
        image: '/img/Cap16.png',
        title: 'Nike SB Dunk Low Pro',
        category: 'Zapatillas',
        description: 'Descripción del producto 2',
        price: 559.80,
        gender: 'Femenino',
        brand: 'Nike',
        sport: 'Runing'
    },  
    {
        image: '/img/Cap17.png',
        title: 'Adidas Pride RM',
        category: 'Chompas',
        description: 'Descripción del producto 2',
        price: 138.20,
        gender: 'Femenino',
        brand: 'Adidas',
        sport: 'Runing'
    },  
    {
        image: '/img/Cap18.png',
        title: 'Puma ULTIMATE FG/AG',
        category: 'Chimpunes',
        description: 'Descripción del producto 2',
        price: 138.20,
        gender: 'Masculino',
        brand: 'Puma',
        sport: 'Futbol'
    },  
    {
        image: '/img/Cap19.png',
        title: 'GUANTES COPA CLUB',
        category: 'Guantes',
        description: 'Descripción del producto 2',
        price: 59.10,
        gender: 'Masculino',
        brand: 'Adidas',
        sport: 'Futbol'
    },  
    {
        image: '/img/Cap20.png',
        title: 'Mochila 4ATHLTS CAMPER',
        category: 'Mochilas',
        description: 'Descripción del producto 2',
        price: 151.20,
        gender: 'Masculino',
        brand: 'Adidas',
        sport: 'Runing'
    }
];

const marcas = [
    { id: 1, img: "/img/nikeLogo.jpg", nombre: "Nike" },
    { id: 2, img: "/img/rebokLogo.jpg", nombre: "Rebook" },
    { id: 3, img: "/img/pumaLogo.jpg", nombre: "Puma" },
    { id: 4, img: "/img/mizunoLogo.jpg", nombre: "Mizuno" },
    { id: 5, img: "/img/adidasLogo.jpg", nombre: "Adidas" },
    { id: 6, img: "/img/filaLogo.jpg", nombre: "Fila" }
];

const searchBx2 = document.querySelector('.search_bx2');
const searchInput = document.querySelector('.search input');

window.addEventListener('load', () => {
    marcas.forEach(({ img, nombre, url }) => {
        let card = document.createElement('a');
        card.href = url || '#';
        card.innerHTML = `
            <img src="${img}">
            <div class="content2">
                <h6>${nombre}</h6>
            </div>
        `;
        searchBx2.appendChild(card);
    });

    // Render all products on initial load
    renderProducts(products);

    // Add event listeners to filter inputs
    document.getElementById('category').addEventListener('change', filterProducts);
    document.getElementById('gender').addEventListener('change', filterProducts);
    document.getElementById('brand').addEventListener('change', filterProducts);
    document.getElementById('sport').addEventListener('change', filterProducts);
});


searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toUpperCase();
    const cards = searchBx2.getElementsByTagName('a');
    let visibleCount = 0;

    for (let card of cards) {
        const textValue = card.querySelector('h6').textContent || card.querySelector('h6').innerText;
        if (textValue.toUpperCase().includes(filter)) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    }

    if (visibleCount > 0 && filter) {
        searchBx2.style.visibility = 'visible';
        searchBx2.style.opacity = 1;
    } else {
        searchBx2.style.visibility = 'hidden';
        searchBx2.style.opacity = 0;
    }
});

function renderProducts(filteredProducts) {
    const productCards = document.getElementById('product-cards');
    productCards.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card', 'fade-in');
        card.innerHTML = `
            <div class="card-container">
                <img src="${product.image}" alt="${product.title}">
                <a href="#"><i class="ri-heart-line"></i></a>
            </div>
            <div class="card-content">
                <div class="card-title">${product.title}</div>
                <div class="card-category">${product.category}</div>
                <div class="card-price">${product.price.toFixed(2)}</div>
                <div class="card-description" style="display: none;">${product.description}</div>
                <div class="card-gender" style="display: none;">${product.gender}</div>
                <div class="card-brand" style="display: none;">${product.brand}</div>
                <div class="card-sport" style="display: none;">${product.sport}</div>
                <a href="#"><i class="ri-shopping-cart-line"></i></a>
                <a href="#" class="toggle-details"><i class="ri-eye-2-line"></i></a>
                <button class="buy-button">Comprar<i class="ri-check-line check-icon"></i></button>
            </div>
        `;
        productCards.appendChild(card);
    });

    document.querySelectorAll('.toggle-details').forEach(toggle => {
        toggle.addEventListener('click', event => {
            event.preventDefault();
            const card = toggle.closest('.card');
            const product = {
                image: card.querySelector('img').src,
                title: card.querySelector('.card-title').textContent,
                category: card.querySelector('.card-category').textContent,
                price: card.querySelector('.card-price').textContent,
                description: card.querySelector('.card-description').textContent,
                gender: card.querySelector('.card-gender').textContent,
                brand: card.querySelector('.card-brand').textContent,
                sport: card.querySelector('.card-sport').textContent
            };
            openModal(product);
        });
    });
}



function openModal(product) {
    const modal = document.getElementById('product-modal');
    const modalDetails = modal.querySelector('.modal-details');
    modalDetails.innerHTML = `
        <div class="des-content">
            <h1>${product.title}</h1>
            <div class="des-detail">
                <p><strong>Categoria:</strong> ${product.category}</p>
                <p><strong>Precio:</strong> ${product.price}</p>
                <p><strong>Descripción:</strong> ${product.description}</p>
                <p><strong>Género:</strong> ${product.gender}</p>
                <p><strong>Marca:</strong> ${product.brand}</p>
                <p><strong>Deporte:</strong> ${product.sport}</p>
                <button>Comprar<i class="ri-check-line check-icon"></i></button>
            </div>
        </div>
        <img src="${product.image}">
    `;
    modal.style.display = 'flex';
}


function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}


function filterProducts() {
    const category = document.getElementById('category').value;
    const gender = document.getElementById('gender').value;
    const brand = document.getElementById('brand').value;
    const sport = document.getElementById('sport').value;

    const filteredProducts = products.filter(product => {
        return (
            (category === '' || product.category === category) &&
            (gender === '' || product.gender === gender) &&
            (brand === '' || product.brand === brand) &&
            (sport === '' || product.sport === sport) // Agregar filtrado por deporte
        );
    });

    renderProducts(filteredProducts);
}


document.querySelectorAll('.header_list li').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const dropdown = item.querySelector('.dropdown_menu');
      dropdown.style.height = 'auto';
      dropdown.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
      const dropdown = item.querySelector('.dropdown_menu');
      dropdown.style.height = '0';
      dropdown.style.opacity = '0';
    });
  });
  
  document.querySelectorAll('.header_list li').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const dropdown = item.querySelector('.dropdown_menu');
      dropdown.style.height = 'auto';
      dropdown.style.opacity = '1';
      document.querySelector('.header').classList.add('fixed'); // Añade la clase al encabezado
      dropdown.classList.add('fixed'); // Añade la clase al menú desplegable
    });
    
    item.addEventListener('mouseleave', () => {
      const dropdown = item.querySelector('.dropdown_menu');
      dropdown.style.height = '0';
      dropdown.style.opacity = '0';
      document.querySelector('.header').classList.remove('fixed'); // Remueve la clase del encabezado
      dropdown.classList.remove('fixed'); // Remueve la clase del menú desplegable
    });
});


window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
  const header = document.querySelector('.header');
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

