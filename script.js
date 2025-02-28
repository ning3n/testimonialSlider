const testimonials = [{
    name: 'Carlos Duran',
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "¡Estoy encantado con el servicio de paginas web! Desde el primer momento, el equipo demostró un alto nivel de profesionalismo y atención al detalle. Me ayudaron a crear una página para mi negocio que no solo es visualmente atractiva, sino también muy funcional. Cada detalle del producto fue cuidadosamente considerado, lo que ha permitido que mi sitio web destaque entre la competencia. La creatividad y la innovación que aportaron superaron mis expectativas, y he recibido numerosos comentarios positivos de mis clientes.",
},
{
    name: 'Jesus Mendez',
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Mi página web ha mejorado mi visibilidad en línea. La optimización que realizaron fue clave para atraer más tráfico. Recomiendo sus servicios a cualquier persona que necesite destacar en la web.",
},
{
    name: 'Daniel Ortega',
    photoUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "La asesoría en SEO que recibí para mi página web ha sido invaluable. Ahora, mis artículos aparecen en las primeras posiciones de Google, lo que ha incrementado notablemente mi audiencia.",
},
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector("username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {updateTestimonial()}, 1000)
};