let currentLang = "es";

const translations = {
  es: {
    welcome: "👾 ¡A Jugar! 👾",
    play: "¡Quiero jugar!",
    relax: "Modo libre",
    moves: "Movimientos",
    time: "Tiempo",
    level: "Nivel",
    home: "⬅ Inicio"
  },

  en: {
    welcome: "👾 Let's Play! 👾",
    play: "Play Game",
    relax: "Relax Mode",
    moves: "Moves",
    time: "Time",
    level: "Level",
    home: "⬅ Home"
  },

  jp: {
    welcome: "👾 ゲームスタート！ 👾",
    play: "ゲーム開始",
    relax: "リラックスモード",
    moves: "移動回数",
    time: "時間",
    level: "レベル",
    home: "⬅ ホーム"
  }
};

function applyTranslations() {
  const t = translations[currentLang];

  document.querySelector("#welcome-title").textContent = t.welcome;

  document.querySelector("#juego-normal").textContent = t.play;

  document.querySelector("#juego-relax").textContent = t.relax;

  document.querySelector("#label-movimientos").textContent = t.moves;

  document.querySelector("#label-tiempo").textContent = t.time;

  document.querySelector("#label-nivel").textContent = t.level;

  document.querySelector("#volver-inicio").textContent = t.home;

  document.querySelectorAll(".selecciona-nivel .nivel").forEach(function(boton) {
    const numeroNivel = parseInt(boton.dataset.nivel) + 1;
    boton.textContent = t.level + " " + numeroNivel;
  });
}

document.querySelector("#langSelector").addEventListener("change", function(e) {
  currentLang = e.target.value;
  applyTranslations();
});


// Escribimos los niveles dinámicamente
escribeNiveles();

// Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);
document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);
document
  .querySelector("#volver-inicio")
  .addEventListener("click", volverInicio);
document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll(".nivel").forEach(function(elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");
applyTranslations();
