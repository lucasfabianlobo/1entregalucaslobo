let continuar = true;

const mensajeInicial =
  "Ingresa el codigo del producto: \n" +
  "a) Reloj 1 \n " +
  "b) Reloj 2 \n" +
  "c) Reloj 3 \n" +
  "d) joya 1 \n" +
  "e) joya 2 \n";

function iniciarConsulta() {
  let seleccion = prompt(mensajeInicial).toLocaleLowerCase().trim();

  if (
    seleccion !== "a" &&
    seleccion !== "b" &&
    seleccion !== "c" &&
    seleccion !== "d" &&
    seleccion !== "e"
  ) {
    alert("👀 ups ¡ese codigo no es valido!");
  } else {
    switch (seleccion) {
      case "a":
        alert("⌚ reloj1 precio: $15000");
        break;
      case "b":
        alert("⏱ reloj2 precio: $20000");
        break;

      case "c":
        alert("⏳ reloj3 precio: $9320");
        break;
      case "d":
        alert("💍 joya1 precio: $180000");
        break;
      case "e":
        alert("💎 joya2 precio: $200000");
        break;
      default:
        console.error("📣 ups algo salió mal");
    }
  }
}

function preguntarCostos() {
  while (continuar) {
    iniciarConsulta();
    continuar = confirm("¿Seguir consultando?");
  }
}
