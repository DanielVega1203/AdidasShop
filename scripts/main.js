var video = document.getElementById("myVideo");

    video.addEventListener("ended", function() {
        video.currentTime = 0; // Reiniciar el video al principio
        video.play(); // Reproducir el video automáticamente
});

let currentIndex = 0;

function moveCarousel() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 10; // Ancho de la tarjeta más margen
    const totalWidth = cardWidth * cards.length;

    currentIndex++;

    // Asegurar que el índice sea válido
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Mover el carrusel cada 3 segundos
setInterval(moveCarousel, 3000);

const marcas = [
    {
        id: 1,
        img: "/img/nikeLogo.jpg",
        nombre: "Nike"
    },
    {
        id: 2,
        img: "/img/rebokLogo.jpg",
        nombre: "Rebook"
    },
    {
        id: 3,
        img: "/img/pumaLogo.jpg",
        nombre: "Puma"
    },
    {
        id: 4,
        img: "/img/mizunoLogo.jpg",
        nombre: "Mizuno"
    },
    {
        id: 5,
        img: "/img/adidasLogo.jpg",
        nombre: "Adidas"
    },
    {
        id: 6,
        img: "/img/filaLogo.jpg",
        nombre: "Fila"
    }
]

let search_bx2 = document.getElementsByClassName('search_bx2')[0];

window.addEventListener('load', () => {
    marcas.forEach(element => {
        const { img, nombre, url } = element;
        let card = document.createElement('a')
        card.href = url;
        card.innerHTML = `<img src="${img}">
                            <div class="content2">
                                <h6> ${nombre} </h6>
                            </div>`;
                            search_bx2.appendChild(card)
    });
})

search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0]
        let c = b.getElementsByTagName('h6')[0];
        
        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1 ) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible"
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none ';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden"
            search_bx2.style.opacity = 0;
        }
    }
});

const words = ['Adidas', 'Nike', 'Puma'];
const logos = [
  '/img/adidas.png',
  '/img/nike.png',
  '/img/puma.png'
];
const images = ['/img/messiS.png', '/img/cr7.png', '/img/neymarS.png'];
const content3 = document.querySelector('.content3');
let titleBody = 0;
let colorScheme = 0; // Variable para alternar entre los esquemas de colores

const wordDisplay = document.getElementById('wordDisplay');
const imageDisplay = document.getElementById('imageDisplay');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const card2Logo = document.querySelector('.content3 .card2 img');

function updateDisplay() {
  wordDisplay.textContent = words[titleBody];
  imageDisplay.src = images[titleBody];
  card2Logo.src = logos[titleBody];
  wordDisplay.classList.remove('fade-out');
  card2Logo.classList.remove('fade-out'); 
  imageDisplay.style.opacity = 1;
  updateButtonColors();
}

function updateButtonColors() {
  let prevColor, nextColor, contentColor, card2Filter;

  if (words[titleBody] === 'Adidas') {
    prevColor = 'blueviolet';
    nextColor = 'violetgreen';
    contentColor = '#7CC8A9';
    card2Filter = 'drop-shadow(10px 7px 10px #DD5BE7)';
  } else if (words[titleBody] === 'Nike') {
    prevColor = 'orange';
    nextColor = 'black';
    contentColor = '#D3B584';
    card2Filter = 'drop-shadow(10px 10px 5px #D99F50)';
  } else if (words[titleBody] === 'Puma') {
    prevColor = 'red';
    nextColor = 'purple';
    contentColor = '#AF84D3';
    card2Filter = 'drop-shadow(10px 10px 5px #B55555)';
  }

  prevButton.style.backgroundColor = prevColor;
  nextButton.style.backgroundColor = nextColor;
  content3.style.backgroundColor = contentColor;
  card2Logo.style.filter = card2Filter;
}

function changeContent(direction) {
  wordDisplay.classList.add('fade-out');
  card2Logo.classList.add('fade-out'); // Difuminar el logotipo junto con el texto
  imageDisplay.style.opacity = 0; // Difuminar la imagen
  setTimeout(() => {
    titleBody = (titleBody + direction + words.length) % words.length;
    updateDisplay();
  }, 500); // Reducir el tiempo de espera para que coincida con la duración de la transición de la clase CSS
}

prevButton.addEventListener('click', () => changeContent(-1));
nextButton.addEventListener('click', () => changeContent(1));

// Actualizar los colores de los botones, el color de fondo de content3 y el filtro de la card2 al cargar la página
updateButtonColors();

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

