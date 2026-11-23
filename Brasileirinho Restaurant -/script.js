// ==========================================
// CONFIGURACIÓN CENTRAL DEL RESTAURANTE
// ==========================================
// Bro, edita todo lo que necesites desde aquí sin tocar la estructura.

const config = {
    nombre: "Brasileirinho Restaurant",
    eslogan: "El auténtico sabor de Brasil en tu mesa",
    descripcion: "Especialistas en brindar una experiencia única con nuestro exquisito buffet al mediodía y pizzas artesanales de alta calidad por la noche en Trinidad.",
    
    // IMÁGENES (Asegúrate de tenerlas en tu carpeta /img)
    logo: "img/logo.png",
    logoBlanco: "img/logo.png",
    imagenHero: "img/hero.jpg",
    imagenNosotros: "img/about.jpg",

    // CONTACTO & UBICACIÓN
    telefono: "67273322",
    whatsapp: "591672733322", 
    direccion: "Avenida 6 de Agosto 55, Trinidad",
    horario: "Lunes a Domingos, de 11:30 AM - 2:30 PM y 5:00 PM - 11:00 PM",
    
    // REDES SOCIALES
    instagram: "https://www.instagram.com/brasileirinhotdd",
    facebook: "https://www.facebook.com/brasileirinhorestaurant/?locale=es_LA",
    
    // MAPA
    mapaEnlace: "https://maps.app.goo.gl/5SKz46WXgLZV8ALZA",
    mapaIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15410.6558237279!2d-64.912753!3d-14.832961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93dd13d2f232fc53%3A0xcb13e8e2bb6ab4b!2sTrinidad!5e0!3m2!1ses!2sbo!4v1700000000000",

    // CARACTERÍSTICAS (Sobre nosotros)
    caracteristicas: [
        "Buffet libre variado al mediodía",
        "Pizzas artesanales horneadas por la noche",
        "Ambiente familiar, moderno y acogedor",
        "Ubicación céntrica en Avenida 6 de Agosto"
    ]
};

// ==========================================
// BASE DE DATOS DEL MENÚ
// ==========================================
const menu = [
    {
        nombre: "Buffet Libre (Almuerzo)",
        descripcion: "Disfruta de una selección variada de carnes, guarniciones y ensaladas frescas. De 11:30 AM a 2:30 PM.",
        precio: 45,
        imagen: "img/buffet.jpg",
        categoria: "Buffet Día"
    },
    {
        nombre: "Pizza Pepperoni",
        descripcion: "Masa artesanal crujiente, doble mozzarella y abundante pepperoni. Disponible en horario nocturno.",
        precio: 65,
        imagen: "img/pizza1.jpg",
        categoria: "Pizzas Noche"
    },
    {
        nombre: "Pizza Cuatro Quesos",
        descripcion: "Exquisita combinación de mozzarella, roquefort, parmesano y provolone.",
        precio: 75,
        imagen: "img/pizza2.jpg",
        categoria: "Pizzas Noche"
    },
    {
        nombre: "Calzone Rellenos",
        descripcion: "Deliciosos calzones rellenos de jamón, queso y champiñones, horneados a la perfección.",
        precio: 25,
        imagen: "img/calzone.jpg",
        categoria: "Calzones"
    },
    {
        nombre: "Pie de Limón",
        descripcion: "Delicioso postre de limón con una base crujiente y un relleno cremoso.",
        precio: 15,
        imagen: "img/pielimon.jpg",
        categoria: "Postres"
    },
    {
        nombre: "Pie de Maracuyá",
        descripcion: "Exquisito postre de maracuyá con una base crujiente y un relleno cremoso.",
        precio: 15,
        imagen: "img/piemaracuya.jpg",
        categoria: "Postres"
    }
];

// ==========================================
// RESEÑAS Y GALERÍA
// ==========================================
const resenas = [
    { nombre: "Mateus R.", estrellas: 4, comentario: "El buffet del mediodía es increíblemente completo. Sabor 100% brasileño." },
    { nombre: "Valeria C.", estrellas: 3.5, comentario: "Las pizzas de la noche son riquísimas y la atención excelente. Muy recomendado." },
    { nombre: "Rodrigo P.", estrellas: 5, comentario: "El local se ve súper moderno y elegante. De lo mejor en Trinidad." }
];

const galeria = [
    "img/galeria1.jpg",
    "img/galeria2.jpg",
    "img/galeria3.jpg",
    "img/galeria4.jpg",
    "img/galeria5.jpg",
    "img/galeria6.jpg",
    "img/galeria7.jpg",
    "img/galeria8.jpg",
];

// ==========================================
// LÓGICA DE LA APLICACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    inicializarSitio();
    renderizarMenu();
    renderizarResenas();
    renderizarGaleria();
    configurarEventos();
});

function inicializarSitio() {
    document.title = `${config.nombre} | Trinidad, Beni`;
    document.getElementById('nav-logo').src = config.logo;
    document.getElementById('footer-logo').src = config.logoBlanco;
    
    // Hero
    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `url('${config.imagenHero}')`;
    document.getElementById('hero-title').textContent = config.nombre;
    document.getElementById('hero-subtitle').textContent = config.eslogan;

    // Nosotros
    document.getElementById('about-image').src = config.imagenNosotros;
    document.getElementById('about-desc').textContent = config.descripcion;
    const list = document.getElementById('about-features');
    config.caracteristicas.forEach(feat => {
        let li = document.createElement('li');
        li.textContent = feat;
        list.appendChild(li);
    });

    // Ubicación & Footer
    document.getElementById('loc-direccion').textContent = config.direccion;
    document.getElementById('loc-horario').textContent = config.horario;
    document.getElementById('loc-telefono').textContent = config.telefono;
    document.getElementById('mapa-iframe').src = config.mapaIframe;
    document.getElementById('btn-mapa').href = config.mapaEnlace;
    
    document.getElementById('foot-dir').textContent = config.direccion;
    document.getElementById('foot-tel').textContent = `Telf: ${config.telefono}`;
    document.getElementById('link-fb').href = config.facebook;
    document.getElementById('link-ig').href = config.instagram;
    
    // Botones de WhatsApp
    document.getElementById('wa-float').href = `https://wa.me/${config.whatsapp}?text=Hola,%20quisiera%20hacer%20una%20consulta.`;
    document.getElementById('btn-wa-reserva').href = `https://wa.me/${config.whatsapp}?text=¡Hola!%20Quiero%20reservar%20una%20mesa%20en%20Brasileirinho%20🇧🇷`;
    
    document.getElementById('year').textContent = new Date().getFullYear();
}

function renderizarMenu() {
    const grid = document.getElementById('menu-grid');
    const filterContainer = document.getElementById('menu-filters');
    
    const categorias = ["Todos", ...new Set(menu.map(item => item.categoria))];
    
    categorias.forEach((cat, index) => {
        let btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if(index === 0) btn.classList.add('active');
        btn.textContent = cat;
        btn.dataset.filter = cat;
        filterContainer.appendChild(btn);
    });

    const mostrarPlatos = (filtro) => {
        grid.innerHTML = '';
        const filtrados = filtro === "Todos" ? menu : menu.filter(p => p.categoria === filtro);
        
        filtrados.forEach(plato => {
            let card = document.createElement('div');
            card.classList.add('menu-card');
            card.innerHTML = `
                <img src="${plato.imagen}" alt="${plato.nombre}" onerror="this.src='img/placeholder.jpg'">
                <div class="menu-info">
                    <div>
                        <h3>${plato.nombre}</h3>
                        <p>${plato.descripcion}</p>
                    </div>
                    <div class="menu-price">Bs ${plato.precio}</div>
                </div>
            `;
            card.addEventListener('click', () => abrirModalProducto(plato));
            grid.appendChild(card);
        });
    };

    mostrarPlatos("Todos");

    filterContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            mostrarPlatos(e.target.dataset.filter);
        }
    });
}

function renderizarResenas() {
    const grid = document.getElementById('reviews-grid');
    resenas.forEach(res => {
        let stars = "★".repeat(res.estrellas) + "☆".repeat(5 - res.estrellas);
        let card = document.createElement('div');
        card.classList.add('review-card');
        card.innerHTML = `
            <div class="stars">${stars}</div>
            <p>"${res.comentario}"</p>
            <h4>— ${res.nombre}</h4>
        `;
        grid.appendChild(card);
    });
}

function renderizarGaleria() {
    const grid = document.getElementById('gallery-grid');
    galeria.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        img.alt = "Galería Brasileirinho";
        img.addEventListener('click', () => abrirModalGaleria(src));
        grid.appendChild(img);
    });
}

function abrirModalProducto(plato) {
    document.getElementById('modal-img').src = plato.imagen;
    document.getElementById('modal-title').textContent = plato.nombre;
    document.getElementById('modal-desc').textContent = plato.descripcion;
    document.getElementById('modal-price').textContent = `Bs ${plato.precio}`;
    document.getElementById('product-modal').style.display = 'flex';
}

function abrirModalGaleria(src) {
    document.getElementById('modal-gallery-img').src = src;
    document.getElementById('image-modal').style.display = 'flex';
}

function configurarEventos() {
    document.querySelector('.close-modal').addEventListener('click', () => document.getElementById('product-modal').style.display = 'none');
    document.querySelector('.close-img-modal').addEventListener('click', () => document.getElementById('image-modal').style.display = 'none');
    
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const upBtn = document.getElementById('up-float');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 400) upBtn.style.display = 'flex';
        else upBtn.style.display = 'none';
    });
    upBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
}