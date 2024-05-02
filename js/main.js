//! ESTE DOCUMENTO JS ES SOLO PARA APROBECHAR LA PAGINA Y APRENDER

//******** Parallax ********/
const title = document.getElementById("title");
const nueva_temporada_title = document.getElementById("nueva_temporada_title");
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  title.style.top = scroll * 0.4 + "px";
  nueva_temporada_title.style.top = scroll * 1.5 + "px";
});
