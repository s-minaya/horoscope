import "./style.css";
("use strict");

// SECCIÓN DE QUERY-SELECTORS
const dateInput = document.querySelector("#start");
const form = document.querySelector("form");
const resultSign = document.querySelector("#result-sign");
const resultFortune = document.querySelector("#result-fortune");
const bubble = document.querySelector("#bubble");
const bubbleArrow = document.querySelector("#bubble-arrow");
const cursor = document.querySelector("#cursor");

// SECCIÓN DE DATOS
const zodiacSymbols = {
  Aries: "♈",
  Tauro: "♉",
  Géminis: "♊",
  Cáncer: "♋",
  Leo: "♌",
  Virgo: "♍",
  Libra: "♎",
  Escorpio: "♏",
  Sagitario: "♐",
  Capricornio: "♑",
  Acuario: "♒",
  Piscis: "♓",
};

const mysticFortunes = [
  "He cruzado la oscuridad eterna para decirte esto: hoy no es tu día. Vuelve mañana.",
  "Llevo siglos sobrevolando almas perdidas y la tuya... tiene arreglo. Poco, pero tiene.",
  "Los muertos me susurran tu futuro. Dicen que el Wi-Fi te fallará en el momento más inoportuno.",
  "He visto cosas que te harían llorar. Sobre todo tu historial de decisiones románticas.",
  "El abismo me habla de ti. Dice que tienes potencial... para quedarte en el sofá.",
  "Emerjo de las sombras para advertirte: alguien de tu pasado volverá. Sí, esa. Prepárate.",
  "He sobrevolado tu futuro esta noche. Hay oscuridad, pero también hay pizza. Predomina la pizza.",
  "Las tinieblas me revelan que hoy tendrás una gran idea. Y que no la ejecutarás. Como siempre.",
  "He bebido de la luna llena para darte este mensaje: duerme más, te lo mereces.",
  "Los espíritus nocturnos me dicen que alguien te admira en secreto. Yo también lo encuentro inquietante.",
  "Contemplo tu aura desde las alturas. Tiene buena pinta... para ser la tuya.",
  "La noche eterna me ha mostrado tu destino. Es raro, pero es tuyo y ya no hay devolución.",
  "He atravesado dimensiones para traerte esta verdad: Mercurio retrógrado no es excusa para todo.",
  "Mis oídos de criatura nocturna captan frecuencias que tú no puedes oír. Me están hablando de ti. No muy bien.",
  "Salgo de mi cueva solo para ocasiones importantes. Esta no lo era, pero aquí estoy.",
  "El eco de las catacumbas grita tu nombre. Tranquilo, solo es que debes dinero.",
  "He visto el hilo de tu destino. Es corto, enredado y tiene un nudo raro a mitad.",
  "La oscuridad me habla de una sorpresa próxima. Puede que sea buena. Puede que no. Soy un murciélago, no un oráculo.",
  "Mis ecos nocturnos detectan que hoy tomarás una decisión importante. Espero que mejor que la última.",
  "He sobrevolado tu futuro y he visto luz al final del túnel. Era un tren. Esquívalo.",
  "Las sombras me susurran que el éxito se acerca. Viene despacio, pero viene. Como tú por las mañanas.",
];

// SECCIÓN DE FUNCIONES
function showBubble() {
  bubble.classList.remove("hidden");
  bubbleArrow.classList.remove("hidden");
}

function typeText(element, text, speed = 40) {
  element.textContent = "";
  cursor.classList.remove("hidden");
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      cursor.classList.add("hidden");
    }
  }, speed);
}

function calculateHoroscope(birthMonth, birthDay) {
  const randomNumber = Math.floor(Math.random() * mysticFortunes.length);

  if (
    (birthMonth === 9 && birthDay >= 24 && birthDay <= 30) ||
    (birthMonth === 10 && birthDay <= 23 && birthDay >= 1)
  ) {
    return { sign: "Libra", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 3 && birthDay >= 21 && birthDay <= 31) ||
    (birthMonth === 4 && birthDay <= 20 && birthDay >= 1)
  ) {
    return { sign: "Aries", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 4 && birthDay >= 21 && birthDay <= 30) ||
    (birthMonth === 5 && birthDay <= 20 && birthDay >= 1)
  ) {
    return { sign: "Tauro", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 5 && birthDay >= 21 && birthDay <= 31) ||
    (birthMonth === 6 && birthDay <= 21 && birthDay >= 1)
  ) {
    return { sign: "Géminis", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 6 && birthDay >= 22 && birthDay <= 30) ||
    (birthMonth === 7 && birthDay <= 22 && birthDay >= 1)
  ) {
    return { sign: "Cáncer", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 7 && birthDay >= 23 && birthDay <= 31) ||
    (birthMonth === 8 && birthDay <= 23 && birthDay >= 1)
  ) {
    return { sign: "Leo", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 8 && birthDay >= 24 && birthDay <= 31) ||
    (birthMonth === 9 && birthDay <= 23 && birthDay >= 1)
  ) {
    return { sign: "Virgo", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 10 && birthDay >= 24 && birthDay <= 31) ||
    (birthMonth === 11 && birthDay <= 22 && birthDay >= 1)
  ) {
    return { sign: "Escorpio", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 11 && birthDay >= 23 && birthDay <= 30) ||
    (birthMonth === 12 && birthDay <= 21 && birthDay >= 1)
  ) {
    return { sign: "Sagitario", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 12 && birthDay >= 22 && birthDay <= 31) ||
    (birthMonth === 1 && birthDay <= 20 && birthDay >= 1)
  ) {
    return { sign: "Capricornio", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 1 && birthDay >= 21 && birthDay <= 31) ||
    (birthMonth === 2 && birthDay <= 19 && birthDay >= 1)
  ) {
    return { sign: "Acuario", fortune: mysticFortunes[randomNumber] };
  } else if (
    (birthMonth === 2 && birthDay >= 20 && birthDay <= 29) ||
    (birthMonth === 3 && birthDay <= 20 && birthDay >= 1)
  ) {
    return { sign: "Piscis", fortune: mysticFortunes[randomNumber] };
  } else {
    return null;
  }
}

// SECCIÓN DE EVENTOS
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!dateInput.value) {
    showBubble();
    resultSign.textContent = "🦇 ...";
    typeText(
      resultFortune,
      "Mortal impaciente. Primero dime cuándo naciste. Las tinieblas no funcionan con datos vacíos.",
    );
    return;
  }

  const [year, month, day] = dateInput.value.split("-");
  const horoscope = calculateHoroscope(Number(month), Number(day));

  showBubble();
  resultSign.textContent = `${zodiacSymbols[horoscope.sign]} ${horoscope.sign}`;
  typeText(resultFortune, horoscope.fortune);
});
