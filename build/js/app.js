function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n        <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n        <img width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galeria">        \n        `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/grande/${e}.webp" type="image/webp">\n        <img width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">        \n        `;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()};const o=document.createElement("P");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()},n.appendChild(o);const c=document.querySelector("body");c.appendChild(n),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
