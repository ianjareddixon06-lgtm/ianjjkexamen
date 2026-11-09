
const personajes = {
  yuji: {
    nombre: "Yuji Itadori",
    titulo: "Estudiante de hechicería",
    descripcion: "Yuji es un joven valiente que entra al mundo de las maldiciones después de tragarse un dedo de Sukuna. Su objetivo es proteger a las personas.",
    poder: "Gran fuerza física, energía maldita y Destello Negro.",
    personalidad: "Amable, divertido y dispuesto a ayudar."
  },
  gojo: {
    nombre: "Satoru Gojo",
    titulo: "Profesor de hechicería",
    descripcion: "Gojo es uno de los hechiceros más poderosos. Enseña a sus estudiantes a combatir las maldiciones y a controlar sus habilidades.",
    poder: "Infinito, Seis Ojos y expansión de dominio.",
    personalidad: "Seguro de sí mismo, bromista e inteligente."
  },
  megumi: {
    nombre: "Megumi Fushiguro",
    titulo: "Hechicero de primer año",
    descripcion: "Megumi es un estudiante serio que utiliza sombras para invocar criaturas y luchar contra las maldiciones.",
    poder: "Técnica de las Diez Sombras.",
    personalidad: "Tranquilo, reservado y protector."
  },
  nobara: {
    nombre: "Nobara Kugisaki",
    titulo: "Estudiante de hechicería",
    descripcion: "Nobara es una joven decidida que lucha usando un martillo, clavos y muñecos de paja.",
    poder: "Técnica de muñeco de paja y Resonancia.",
    personalidad: "Valiente, orgullosa y decidida."
  },
  sukuna: {
    nombre: "Ryomen Sukuna",
    titulo: "Rey de las Maldiciones",
    descripcion: "Sukuna es una figura muy peligrosa del mundo de la hechicería. Su poder está relacionado con los dedos malditos que dejó atrás.",
    poder: "Ataques cortantes, fuego y Santuario Malevolente.",
    personalidad: "Cruel, arrogante y extremadamente poderoso."
  }
};

function mostrarPersonaje(id) {
  const p = personajes[id];
  if (!p) return;

  const dialogo = document.querySelector("dialog");
  if (!dialogo) return;

  const titulo = dialogo.querySelector("h2");
  const contenido = dialogo.querySelector(".dialog-copy");

  if (titulo) titulo.textContent = p.nombre;

  if (contenido) contenido.innerHTML =
    "<h2>" + p.nombre + "</h2>" +
    "<h3>" + p.titulo + "</h3>" +
    "<p>" + p.descripcion + "</p>" +
    "<p><strong>Poder:</strong> " + p.poder + "</p>" +
    "<p><strong>Personalidad:</strong> " + p.personalidad + "</p>";

  dialogo.showModal();
}

document.querySelectorAll(".character-card").forEach((card, i) => {
  const ids = ["yuji", "gojo", "megumi", "nobara", "sukuna"];

  card.addEventListener("click", () => {
    mostrarPersonaje(card.dataset.character || ids[i]);
  });
});

document.querySelectorAll(".close-btn").forEach(boton => {
  boton.addEventListener("click", () => {
    const dialogo = boton.closest("dialog");
    if (dialogo) dialogo.close();
  });
});
  
