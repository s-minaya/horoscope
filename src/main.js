import "./style.css";
("use strict");

// SECCIÓN DE QUERY-SELECTOR

const dateInput = document.querySelector("#start");
const form = document.querySelector("form");
const resultSign = document.querySelector("#result-sign");
const resultFortune = document.querySelector("#result-fortune");

// SECCIÓN DE DATOS

const mysticFortunes = [
  "Hoy no es tu día… pero tampoco es el de nadie, así que tranquilo.",
  "Una gran oportunidad llegará… probablemente mientras estás en pijama.",
  "Tu futuro es brillante, pero tus ojeras también.",
  "Hoy podrías ser productivo… pero tampoco hay que forzar las cosas.",
  "Alguien importante entrará en tu vida… o al menos en tus notificaciones.",
  "La suerte está de tu lado, pero está distraída mirando el móvil.",
  "Evita tomar decisiones importantes… como levantarte de la cama.",
  "Un cambio se acerca… seguramente de planes a última hora.",
  "Hoy es un buen día para empezar la dieta… mañana.",
  "Tu intuición es fuerte, pero tu pereza más.",
  "Algo increíble te pasará… pero no hoy.",
  "La fortuna sonríe… pero a veces con sarcasmo.",
  "Hoy brillarás… sobre todo de sudor.",
  "No todo está perdido… solo un poco desordenado.",
  "Alguien te admira… probablemente tu gato (si tuvieras uno).",
  "Tus problemas se resolverán… eventualmente… quizá.",
  "Hoy es un gran día para no hacer absolutamente nada.",
  "El universo tiene un plan para ti… pero no quiere spoilers.",
  "Una sorpresa te espera… o un susto, depende cómo lo mires.",
  "Tu energía es contagiosa… lástima que sea sueño.",
  "Vas a conseguir ese trabajo que quieres... pero solo si dejas de obsesionarte con el horóscopo.",
];
const randomNumber = Math.floor(Math.random() * mysticFortunes.length);

// SECCIÓN DE FUNCIONES

function calculateHoroscope(birthMonth, birthDay) {
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
    return "Fecha de nacimiento no válida";
  }
}

// SECCIÓN DE EVENTOS

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!dateInput.value) {
    resultSign.textContent = "Por favor selecciona una fecha";
    resultFortune.textContent = "";
    return;
  }

  const [year, month, day] = dateInput.value.split("-");
  const horoscope = calculateHoroscope(Number(month), Number(day));

  resultSign.textContent = `Tu signo es ${horoscope.sign}`;
  resultFortune.textContent = `Tu fortuna es: ${horoscope.fortune}`;
});
